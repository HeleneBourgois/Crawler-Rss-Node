import Parser from 'rss-parser'
import Request from 'request'

const extractRss = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const parser = new Parser()
            const feed = await parser.parseURL(url)

            if (!feed || !feed.items || feed.items.length === 0) {
                return resolve()
            }
            const options = {
                method: 'POST',
                url: 'http://localhost:8080/articles/create',
                json: true,
                body: feed.items
            }
            Request(options, (err, res, body) => {
                if (err) {
                    return reject(err)
                }
                return resolve()
            })
        } catch(err) {
            return reject(err)
        }
    })
}

const rss = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const feeds = [
                'http://www.jeuxvideo.com/rss/rss.xml',
                'http://www.jeuxvideo.com/rss/rss-news.xml',
                'http://www.jeuxvideo.com/rss/itunes-chroniques.xml',
                'https://news.google.com/news?ned=fr&num=100&output=rss&q=(%22starwars%22',
                'http://www.jeuxvideo.com/rss/rss-videos.xml',
                'http://www.numerama.com/feed/',
                'https://news.ycombinator.com/rss'
            ]
            for (const url of feeds) {
                await extractRss(url)
            }
            return resolve()
        } catch(err) {
            return reject(err)
        }
    })
}

const cron = () => {
    setTimeout(async () => {
        try {
            await rss()
            cron()
        } catch (err) {
            console.log(err)
        }
    }, 60000)
}
 
export default {
    cron
}