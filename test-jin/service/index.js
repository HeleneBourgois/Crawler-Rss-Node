import express from 'express'
import { port } from './src/config'
import bodyParser from 'body-parser'
import router from './src/router'

export const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Worker listening on port ${port}!`)
})
