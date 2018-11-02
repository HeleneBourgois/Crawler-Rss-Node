import express from 'express'
import { port } from './src/config'
import worker from './src/worker'

export const app = express()

app.listen(port, () => {
    console.log(`Worker listening on port ${port}!`)
    worker.cron()
})
