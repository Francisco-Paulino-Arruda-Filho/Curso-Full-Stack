require('dotenv').config();

const route = require('../src/routes');
const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
  try {
    console.log('Conectado à base de dados!');
  }catch (e) {
    console.log(e);
  }
}).catch(e => {
  //console.log(e);
  console.log('Não foi possível conectar à base de dados!');
});

const port = 3000;
const meuMiddleware = require('../src/middleware/middleware')
const checkCsrfError = require('../src/middleware/middleware');
const srfMiddleware = require('../src/middleware/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
//const { default: mongoose } = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.use(flash());

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(csrf());
app.use(meuMiddleware);
app.use(checkCsrfError);
app.use(srfMiddleware);
app.use(helmet());

const sessionOptions = session({
  secret: 'Segredinho',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING // Utilizando a string de conexão do MongoDB
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60, // Uma hora
    httpOnly: true
  }
});

app.use(sessionOptions);

// Mantém o servidor ativo na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
