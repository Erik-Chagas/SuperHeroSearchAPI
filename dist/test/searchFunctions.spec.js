"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _searchFunctions = require('../utils/searchFunctions'); var search = _interopRequireWildcard(_searchFunctions);

describe("Search functions", () => {
    const exampleObject  = {
        nome: "Borracha",
        preco: 3.45,
        extra: {
            material: 'latex',
            data: '22/12/1990'
        }
    }

    const exampleArrayObject  = [
        {
            nome: "Borracha",
            preco: 3.45,
            extra: {
                material: 'latex',
                data: '22/12/1990'
            }
        },
        {
            nome: "Lápis",
            preco: 5,
            extra: {
                material: 'Carvão',
                data: '22/12/2000'
            }
        },
        {
            nome: "Lapiseira",
            preco: 7,
            extra: {
                material: 'Carvão, aaaa',
                data: '22/12/2001'
            }
        }
    ]

    beforeAll(() => {

    })

    it("Should populate a array with all the keys of the object and the objects inside it", () => {
        let arrayToPopulate  = [];
        search.returnObjectValues(exampleObject, arrayToPopulate);

        expect(arrayToPopulate).toEqual(['Borracha', 3.45, 'latex', '22/12/1990']) 
    })

    it("Should filter the string 'key' into the values of the elements of the array", () => {
        const arrayReturn  = search.searchWord(exampleArrayObject, 'pis')
        const returning = arrayReturn.map(e => e.nome)

        expect(returning).toEqual(['Lápis', 'Lapiseira'])
        
    })
})