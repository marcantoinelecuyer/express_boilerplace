import express from "express"
import config from "./config";

const app = express()

app.get('/', async (req, res) => {
    res.send('<h1>Hello World</h1>')
})


app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`)
})

