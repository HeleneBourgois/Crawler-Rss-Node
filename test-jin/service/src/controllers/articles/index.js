import { Article } from './../../models/articles'

const create = (req) => {
    return  new Promise(async (resolve, reject) => {
        try {
            if (!req.body) {
                return reject({ message: 'Nothing to save' })
            }
            const articles = [...req.body]

            const tasks = []

            for (const article of articles) {
                if (article.link) {
                    const articleFound = await Article.findOne({ link: article.link })
                    if (!articleFound) {
                        const task = { 
                            insertOne : {
                                document : {
                                    title: article.title,
                                    link: article.link,
                                    pubDate: new Date(article.isoDate),
                                    content: article.content,
                                    _createdAt: new Date()
                                }
                            }
                        }
                        tasks.push(task)
                    }
                }
            }
            if (tasks.length > 0) {
                await Article.bulkWrite(tasks)
            }
            return resolve({ response: 'Articles saved' })
        } catch (err) {
            return reject(err)
        }
    })
}

export default {
    create
}