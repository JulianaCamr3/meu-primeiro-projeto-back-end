const express = require("express")
const router = express.Router()


const app = express()

const porta = 3333

function mostraMulher(request, response){
  response.json({ // Usamos .json para criar objetos em javascript
    nome: 'Juliana Gonçalves',
    imagem: 'https://avatars.githubusercontent.com/u/127456239?v=4&size=64',
    minibio: 'Futura desenvolvedora e estudante de Ciência da Computação'
  })
}

function mostraPorta(){
  console.log('Servidor criado e rodando na porta:', porta)
}



app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)