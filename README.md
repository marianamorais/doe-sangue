<div align="center">
  <img src="https://i.imgur.com/Yzv7udf.png">
</div><br>
 
 <h1 align="center">MaratonaDev 3.0 - DOE Sangue</h1>
 
<p align="center">
<a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
<img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
</a>
<a aria-label="Completo" href="https://rocketseat.com.br/maratonadev/aulas/3.0?aula=2">
<img src="https://img.shields.io/badge/MaratonaDev-done-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
</a>
</p>
  
## 🚀 About the project

It's a registration system for blood donors, made with Node.js, PostgreSQL and some JS dependencies. It was created in the *3rd MaratonaDev*, offered by [Rocketseat](https://rocketseat.com.br/). Instructor: [Mayk Brito](https://github.com/maykbrito).

## Techs

[Node.js](https://nodejs.org/en/)
| [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)
| [Html](https://tableless.com.br/o-que-html-basico/)
| [CSS](https://www.w3schools.com/css/)
| [Nodemon](https://nodemon.io/)
| [PostgreSQL](https://www.postgresql.org/)
| [Nunjucks](https://mozilla.github.io/nunjucks/)

 ## Front-end
 
 <div align="center" width=50px>
  <img src="https://i.imgur.com/u51i17R.png">
 </div><br>
 
 ## Postbird
 
  <div align="center">
    <img src="https://i.imgur.com/r6hYFTR.png">
  </div><br>

### Dependencies

- <a href="https://nodejs.org/en/download/">Node.JS</a>
- <a href="https://www.postgresql.org/download/">PostgreSQL</a>

`npm install ... `
- express (Web server) 
- nodemon (To listen to files and directories, without having to restart nodejs with every change)
- nunjucks (To organize and manipulate HTML content dynamically, using template engines)
- pg (PostgreSQL for node)

### 🏁 Installation

- Clone the repository

```git clone 'repository link'```

- Enter the project folder

```
cd doe-sangue
```

- Download the dependencies that the project needs to execute

```
npm install
```

- PostgreSQL

```Create a database called ** 'doe' ** (without quotes) and within it a table called ** 'donors' ** (also without quotes).```

- Table creation

```
CREATE TABLE "public"."donors" (
"id" int4 DEFAULT nextval('donors_id_seq'::regclass) NOT NULL,
"name" text COLLATE "default" NOT NULL,
"email" text COLLATE "default" NOT NULL,
"blood" text COLLATE "default" NOT NULL
)
WITH (OIDS=FALSE);
```

- Run the project

```
npm start
```

- Open the project in your browser

```
localhost:3000
```

## :memo: Licence

#### MIT Licence. See the file [license](./LICENSE) for more details.
