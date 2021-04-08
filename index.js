const express = require('express');
const cors = require('cors');
const { LoginController, RegisterController } = require('./controllers');
const { validateDatas, validateName, validateNewUser } = require('./middlewares/validations');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/register', validateDatas, validateName, validateNewUser, RegisterController);
app.use('/login', validateDatas, LoginController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
