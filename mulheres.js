<<<<<<< HEAD
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
=======
const express = require("express");
const router = express.Router();
const app = express();

const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceicao',
        imagem: ' ',
        minibio: 'Desenvolvedora e Instrutora'

    },
    {
        nome: 'Iana Chan',
        imagem: ' ',
        minibio: 'Fundadora da Programaria '
    },
    {
        nome:' Nina da Hora',
        imagem: ' ',
        minibio: ' Hacker Antirracista'
    }

]



function mostraMulheres(request, response){
   response.json(mulheres)
}



//function mostraMulher(request, response) {
  //  response.json({
    //    nome: 'Simara Conceição',
      //  imagem:'',
        //minibio: 'Desenvolvedora e Instrutora'
    //});
//}


function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta);

}



app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)


>>>>>>> 4d7f7c0 (adiciona a segunda versão do meu projeto)
