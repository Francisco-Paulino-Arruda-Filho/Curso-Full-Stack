require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
  try {
    console.log('Conectado à base de dados!');
  }catch (e) {
    console.log(e);
  }
}).catch(e => {
  console.log('Não foi possível conectar à base de dados!');
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { meuMiddleware, checkCsrfError, csrfMiddleware } = require('./middleware/middleware');


app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionOptions = session({
  secret: 'Segredinho',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' // Garante segurança em produção
  }
});
app.use(sessionOptions);
app.use(flash());

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(meuMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
});