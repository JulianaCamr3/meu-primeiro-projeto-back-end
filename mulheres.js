const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333



const mulheres = [
  {
    nome:'',
    imagem: '',
    minibio:'',
  },
  {
    nome:'',
    imagem: '',
    minibio:'',
  },
  {
    nome:'',
    imagem: '',
    minibio:'',
  },
]


function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta(){
  console.log('Servidor criado e rodando na porta:', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)