"use strict";Object.defineProperty(exports, "__esModule", {value: true});//função que povoa um array com todos os values de um determinado objeto e de outros objetos de dentro dele (utiliza recursão)
const returnObjectValues = (obj , array  = []) => {
    if(obj != undefined){
        Object.values(obj).forEach((e) => {
            if((typeof e) == 'object')
            {
                returnObjectValues(e, array)
            } else {
                array.push(e)
            }
        })
    }
}

//função que filtra o string 'key' dentro dos values dos elementos do conjunto de dados (array) 'data' 
const searchWord = (data , key ) => {
    let heroes  = []

    heroes = data.filter((e) => {
        let heroesValues  = []
        returnObjectValues(e, heroesValues)
        heroesValues.unshift(false)
        return heroesValues.reduce((a, currentValue) => a || currentValue.toString().toLowerCase().indexOf(key.toString().toLowerCase()) != -1)
    })
        
    return heroes
}

exports.returnObjectValues = returnObjectValues; exports.searchWord = searchWord;
