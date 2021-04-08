const express = require('express');
const cors = require('cors');
const RegisterController = require('./controllers/RegisterController');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/register', RegisterController);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))