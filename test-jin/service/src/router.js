import fs from 'fs'
const pathRoutes = __dirname + '/routes'

fs.readdir(pathRoutes, (err, files) => {
    files.forEach(file => {
        let path = `${pathRoutes}/${file}/index.js`
        require(path)
    })
})
