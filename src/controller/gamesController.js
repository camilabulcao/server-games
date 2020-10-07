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

const getGames = (request, response) => {
    response.status(200).send(novaListaGames)

}

module.exports = {
    getGames

}
