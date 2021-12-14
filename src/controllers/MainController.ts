import express, { Request, Response} from 'express'
import axios from 'axios'
import { searchWord } from '../utils/searchFunctions'

const app = express()
app.use(express.json())

const urlHero : string = "https://akabab.github.io/superhero-api/api/all.json"

class MainController{

    async getAllHeroes(req: Request, res: Response) : Promise<any>{
        const heroApiRequest = await axios.get(urlHero)
        const allHeroes = await heroApiRequest.data

        return res.send(allHeroes)
    }

    async searchHeroByWord(req: Request, res: Response) : Promise<any>{

        axios.get(urlHero).then(response => response.data).then(data => {
            let returning = searchWord(data, req.query.key.toString())

            if(returning.length == 0){
                return res.status(204).json({})
            }

            return res.send(returning)
        })
    }
}

export default new MainController()