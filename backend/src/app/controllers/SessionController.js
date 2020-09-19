import jwt from 'jsonwebtoken';

import UserDAL from '../dal/UserDAL';

import authConfig from '../../config/auth';

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await UserDAL.findByEmail(email);

    if (user) {
      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'A senha está incorreta.' });
      }

      const id = user.id;

      return res.json({
        user: user,
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } else {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }
  } 
}

export default new SessionController();