//função que povoa um array com todos os values de um determinado objeto e de outros objetos de dentro dele (utiliza recursão)
const returnObjectValues = (obj : Object, array : Array<any> = []) : void => {
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
const searchWord = (data : Array<Object>, key : String) : Array<any> => {
    let heroes : Array<any> = []

    heroes = data.filter((e) => {
        let heroesValues : Array<any> = []
        returnObjectValues(e, heroesValues)
        heroesValues.unshift(false)
        return heroesValues.reduce((a, currentValue) => a || currentValue.toString().toLowerCase().indexOf(key.toString().toLowerCase()) != -1)
    })
        
    return heroes
}

export { returnObjectValues, searchWord }
