import { Router } from "express";
import MainController from '../controllers/MainController'

const routes = Router();

routes.get('/', MainController.getAllHeroes)

routes.get('/search', MainController.searchHeroByWord)

export { routes };