import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
    title: String,
    recipe: String,
    ingredient: [String],
    author:String,
    picture:String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const RecipeModel = mongoose.model('RecipeModel', recipeSchema)

export default RecipeModel