import { app } from '../../..'
import controller from '../../controllers/articles'

app.post('/articles/create', async (req, res, next) => {
    try {
        const createArticle = await controller.create(req)
        res.json({ createArticle })
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})
