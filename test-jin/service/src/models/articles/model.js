import mongoose from 'mongoose'
import { articleSchema } from './schema'

export const Article = mongoose.model('Article', articleSchema)

