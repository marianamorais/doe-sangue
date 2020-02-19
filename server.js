//Onde sera configurado o servidor

const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos extras
server.use(express.static('public'));

// configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
 express: server
});

//Lista de doadores: Vetor ou Array
const donors = [
 {
  name: "Mariana Morais",
  blood: "AB+"
 },
 {
  name: "Victor",
  blood: "B+"
 },
 {
  name: "Diego",
  blood: "A+"
 },
 {
  name: "Larissa",
  blood: "O+"
 }
]

//configurar a apresetaçao da pagina
server.get("/", function(req, res) {
 return res.render("index.html", { valor: "1" });
});

//ligar o servidor e permitir acesso na porta
server.listen(3000, function() {
 console.log("iniciei o servidor")
});