// Configuracao do servidor
const express = require("express")
const server = express()

// Configuração para apresentação de arquivos estáticos
server.use(express.static('public'))

// Habilitação do body no formulário
server.use(express.urlencoded( { extended: true} ));

// Configuração da conexão com o banco de dados
const Pool = require ('pg').Pool
const db = new Pool({
 user: 'postgres',
 password: '',
 host: 'localhost',
 port: 5432,
 database: 'doe'
});

// Configuração da template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
 express: server,
 noCache: true, //booleano
});

// Configuração da apresentação da página
server.get("/", function(req, res) {

    db.query("SELECT * FROM donors", function(err, result) {
      if (err) return res.send("Erro no banco de dados.")
  
      const donors = result.rows
      return res.render("index.html", { donors })
    })
  
  })
  
  server.post("/", function(req, res){
    // Pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
  
    if (name == "" || email == "" || blood == "") {
      return res.send("Todos os campos são obrigatórios.")
    }
  
    // Adicionando novos valores no banco de dados
    const query = `
      INSERT INTO donors ("name", "email", "blood")
      VALUES ($1, $2, $3)`
  
    const values = [name, email, blood]
  
    db.query(query, values, function(err) {
      if (err) return res.send("Erro no banco de dados.")
  
      return res.redirect("/")
    })
      
  })
  
  // Inicialização do servidor e acesso a porta 3000

//ligar o servidor e permitir acesso na porta
server.listen(3000, function() {
 console.log("iniciei o servidor")
})