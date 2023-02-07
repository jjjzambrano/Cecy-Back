const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const {
  jwtSecret,
  mailerPassword,
  mailerUser,
  mailerPort,
  jwtSecretRecover,
} = require('./../../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized('No existe el correo electrónico');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized('Contraseña esta incorrecta');
    }
    delete user.dataValues.password;
    return user;
  }

  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, jwtSecret);
    return {
      user,
      token,
    };
  }

  async verifyToken(token, secret) {
    return jwt.verify(token, secret);
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized('Correo electrónico no autorizado');
    }
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, jwtSecretRecover, { expiresIn: '15min' });
    const link = `http://localhost:4200/recovery?token=${token}`;
    await service.updatebyId(user.id, {
      recoveryToken: token,
    });
    const mail = {
      from: 'ajr.parra@yavirac.edu.ec',
      to: `${user.email}`, // list of receivers
      subject: 'Email para recuperar contraseña',
      //text: 'hello world!',
      html: `<b>Ingres a este link para recuperar la contraseña: ${link}</b>
      `,
    };
    const sendMail = await this.sendMail(mail);
    return sendMail;
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: mailerPort,
      auth: {
        user: mailerUser,
        pass: mailerPassword,
      },
    });
    await transporter.sendMail(infoMail);
    return { message: 'Email sender' };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, jwtSecretRecover);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.updatebyId(user.id, {
        recoveryToken: null,
        password: hash,
      });
      return { message: 'Contraseña fue cambiado con éxito' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

module.exports = AuthService;
