

const express = require("express"); // Iniciando o express
const router = express.Router(); // Configurando a rota
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')// aqui estou trazendo o pacote cors que permite consumir essa api no front-end


const conectaBancoDeDados = require('./bancoDeDados') // aqui estou ligando ao arquivo banco de dados
conectaBancoDeDados() // estou chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel')
const app = express(); // iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 // criando a porta




//GET
async function mostraMulheres(request, response){

    try{

        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)

    }catch(erro) {
        console.log(erro)

    }
    
 }



//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.minibio
    })

    try{

        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro)
     {
        console.log(erro)
    }
}


//PATCH

async function corrigeMulher(request, response) {
    try{

        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if(request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }
        
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    

    }catch(erro){
        console.log(erro)
    }

    

   
    
}




//function mostraMulher(request, response) {
  //  response.json({
    //    nome: 'Simara Conceição',
      //  imagem:'',
        //minibio: 'Desenvolvedora e Instrutora'
    //});
//}

//DELETE

async function deletaMulher(request, response) {
    try{

        await Mulher.findByIdAndDelete(request.params.id)

        response.json({ mensagem: 'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }

 
}


function mostraPorta(){
    console.log("Servidor criado e rodando na porta:", porta);

}



app.use(router.get('/mulheres', mostraMulheres)) // Configurei a rota GET
app.use(router.post('/mulheres', criaMulher)) // Configurei a rota POST
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH
app.use(router.delete('/mulheres/:id', deletaMulher))
app.listen(porta, mostraPorta)


