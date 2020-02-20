//Onde sera configurado o servidor

const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estaticos
server.use(express.static('public'));

// habilitar o body do formulario
server.use(express.urlencoded({ extended: true }))

// configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
 express: server,
 noCache: true, //boolean
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
 return res.render("index.html", { donors });
});

//Receber os dados do formulário
server.post("/", function(req, res) {
 const name = req.body.name
 const email = req.body.email
 const blood = req.body.blood

 donors.push({ 
  name: name,
  blood: blood,
 })

 return res.redirect("/")
 
 });

//ligar o servidor e permitir acesso na porta
server.listen(3000, function() {
 console.log("iniciei o servidor")
});