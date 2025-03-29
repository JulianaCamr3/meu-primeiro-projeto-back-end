<<<<<<< HEAD
const express = require("express")
const router = express.Router() // Criando a rota URL


const porta = 3333

const app = express()

function mostraOla(request, response){
  response.send('Olá, mundo!')
}


function mostraPorta(){
  console.log('Servidor criado e rodando na porta:', porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)
=======
const express = require('express')

const router = express.Router()




const app = express
const porta = 3333


function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta)
}


function mostraOla(request, response) {
    response.send('Olá, mundo!')
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)



>>>>>>> 4d7f7c0 (adiciona a segunda versão do meu projeto)
