import express from 'express'
import { port } from './src/config'

export const app = express()
require('./src/router')

app.listen(port, () => {
  console.log(`Worker listening on port ${port}!`)
})

