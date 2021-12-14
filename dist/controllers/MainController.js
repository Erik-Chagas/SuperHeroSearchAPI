"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _searchFunctions = require('../utils/searchFunctions');

const app = _express2.default.call(void 0, )
app.use(_express2.default.json())

const urlHero  = "https://akabab.github.io/superhero-api/api/all.json"

class MainController{

    async getAllHeroes(req, res) {
        const heroApiRequest = await _axios2.default.get(urlHero)
        const allHeroes = await heroApiRequest.data

        return res.send(allHeroes)
    }

    async searchHeroByWord(req, res) {

        _axios2.default.get(urlHero).then(response => response.data).then(data => {
            let returning = _searchFunctions.searchWord.call(void 0, data, req.query.key.toString())

            if(returning.length == 0){
                return res.status(204).json({})
            }

            return res.send(returning)
        })
    }
}

exports. default = new MainController()