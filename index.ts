import express from "express"
import axios from 'axios'

const app = express()

const API_URL = "https://nodeapi.lamsal.repl.co/"

app.get('/', (req: any, res: any) => {
    axios.get(API_URL)
        .then((response: any) => {
            let result = JSON.stringify(response.data)
            console.log('result>>', result)
            res.json('API is working')

        })
        .catch(err => {
            console.log('error>>', err)
        })
})

app.listen(8000, () => {
    console.log("server started at http://localhost:8000")
})

