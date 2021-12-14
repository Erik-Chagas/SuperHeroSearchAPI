import { app } from './app'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`servidor ligado na porta ${PORT} e url localhost:${8080}`)
})