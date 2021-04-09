const express = require('express');
const cors = require('cors');
const { LoginController, RegisterController, UserController } = require('./controllers');
const {
  validateDatas,
  validateName,
  validateNewUser,
  deliverUserWithValidToken,
} = require('./middlewares/validations');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/register', validateDatas, validateName, validateNewUser, RegisterController);
app.use('/login', validateDatas, LoginController);
app.use('/user', deliverUserWithValidToken, UserController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
