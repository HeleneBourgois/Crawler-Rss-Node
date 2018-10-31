import { app } from './../'
import worker from './worker'

app.get('/rss', async (req, res, next) => {
    try {
        await worker.rss()
        res.end()
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})





