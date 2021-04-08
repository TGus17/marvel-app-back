const express = require('express');
const cors = require('cors');
const RegisterController = require('./controllers/RegisterController');
const { validateDatas, validateNewUser } = require('./middlewares/validations');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/register', validateDatas, validateNewUser, RegisterController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))