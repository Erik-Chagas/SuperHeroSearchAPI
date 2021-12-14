"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MainController = require('../controllers/MainController'); var _MainController2 = _interopRequireDefault(_MainController);

const routes = _express.Router.call(void 0, );

routes.get('/', _MainController2.default.getAllHeroes)

routes.get('/search', _MainController2.default.searchHeroByWord)

exports.routes = routes;