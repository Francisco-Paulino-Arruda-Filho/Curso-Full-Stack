require('dotenv').config();

import route from '../src/routes'
import express, { urlencoded } from 'express';
const app = express();

import { connect } from 'mongoose';
connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conexão com o MongoDB realizada com sucesso!');
    app.emit('pronto');
  })
  .catch(err => console.log(err));

const port = 3000;
import { join } from 'path';
import meuMiddleware from '../src/middleware/middleware';

// Middleware para processar dados do corpo de requisições
/*app.use(express.urlencoded({ extended: true }));

// Rota básica (GET)
app.get('/', (req, res) => {
  res.send(`
    <h1>Contatos!</h1>
    <form action="/contatos" method="POST">
      Nome do cliente: <input type="text" name="nome" >
      <button>Clicar</button>
    </form>
  `);
  res.send('<h1>Servidor está rodando!</h1>');
  console.log("Parâmetros:", req.params);
});

// Rota para exibir o formulário e processar dados
app.get('/contatos/:idUsuario?/:parametro?', (req, res) => {
  console.log("Parâmetros:", req.params);
  console.log("Query:", req.query);
});

// Rota para processar o formulário enviado (POST)
app.post('/contatos', (req, res) => {
  const nome = req.body.nome; // Obtendo o nome do corpo da requisição (body)
  res.send(`<h1>Nome recebido: ${nome}</h1>`);
  console.log("Nome recebido:", nome);
});*/
import session from 'express-session';
import { create } from 'connect-mongo';
import flash from 'connect-flash';
//const { default: mongoose } = require('mongoose');
const sessionOptions = session({
  secret: 'Segredinho',
  store: create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 1000 * 60 * 60, // Uma hora
      httpOnly: true
  }
})

app.use(route);
app.use(sessionOptions);
app.use(flash());

app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware);

// Mantém o servidor ativo na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
