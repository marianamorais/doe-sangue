//Onde sera configurado o servidor
const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos extras
server.use(express.static('public'));

// Habilitar body do formulario
server.use(express.urlencoded( { extended: true} ));

// Configurar conexao com o BD
const Pool = require ('pg').Pool
const db = new Pool( {
 user: 'postgres',
 password: '',
 host: 'localhost',
 port: 5432,
 database: 'doe'
});

// configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
 express: server,
 noCache: true, //booleano
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

server.post("/", function(req, res) {
 // Pegar dados do Form
 const name = req.body.name
 const email = req.body.email
 const blood = req.body.blood

 // Colocar valores dentro do BD
 // donors.push({
 //  name: name,
 //  blood: blood,
 // });
 const query = `
 INSERT INTO donors ("name", "email", "blood") 
 VALUES ('$') `

 db.query (query, [name, email, blood])

 return res.redirect("/");

});

//ligar o servidor e permitir acesso na porta
server.listen(3000, function() {
 console.log("iniciei o servidor")
});