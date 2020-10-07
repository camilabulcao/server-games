const { response } = require("express")
const games = require("../model/games.json")

const novaListaGames = games.map(game =>{
    const newGame ={

    id: game.id,
    nome: game.name,
    genero: game.genre, 
    plataformas: game.platforms,
    capa: game.cover
   
    }
    return newGame

})

const gameListaCompleta = games.map(game => {

    const novoJogo ={
        
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        data_lancamento: game.first_release_date,
        slug: game.slug,
        resumo: game.summary,
        empresa: game.company,
        capa: game.cover

    }
    return novoJogo
})


const getGames = (request, response) => {
    response.status(200).send(novaListaGames)

}

const getGamesById = (request, response) =>{
    const id = request.params.id
    const game = gameListaCompleta.find(item => item.id == id)
    if(game){
        response.status(200).send(game)
    } else{
        response.status(404).send("Game não encontrado!")
    }

}

module.exports = {
    getGames,
    getGamesById

}
