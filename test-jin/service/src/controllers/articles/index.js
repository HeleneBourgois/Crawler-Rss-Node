import { Article } from './../../models/articles'

const create = (req) => {
    return  new Promise(async (resolve, reject) => {
        try {
            if (!req.body) {
                return reject({ message: 'Nothing to save' })
            }
            const obj = {
                title: req.body.title,
                link: req.body.link,
                pubDate: new Date(req.body.isoDate),
                content: req.body.content,
                _createdAt: new Date()
            }
            const newObject = new Article(obj)
            await newObject.save()
            return resolve({ response: 'Article creation OK' })
        } catch (err) {
            return reject(err)
        }
    })
}

export default {
    create
}