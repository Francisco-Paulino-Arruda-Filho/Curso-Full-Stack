const route = require('../src/routes');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const meuMiddleware = require('../src/middleware/middleware')

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

app.use(express.urlencoded({ extended: true }))
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs')
app.use(meuMiddleware)
app.use(route)

// Mantém o servidor ativo na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
