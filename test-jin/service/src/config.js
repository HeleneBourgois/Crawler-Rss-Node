import mongoose from 'mongoose'

export const port = 8080

mongoose.connect('mongodb://localhost/articles')
