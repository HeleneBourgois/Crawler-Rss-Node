import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const articleSchema = new Schema({
    title: String,
    link: String,
    pubDate: Date,
    content: String,
    _createdAt: Date
})
