import mongoose from 'mongoose'
import RecipeModel from "../models/recipeModel.js"

export const getRecipes = async (req,res) => {
    
    try{
        const recipes = await RecipeModel.find()
        console.log(recipes);

        res.status(200).json(recipes)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createRecipe = async(req,res) =>{
    const rec = req.body

    const newRecipe = new RecipeModel(rec)
    try {
       await newRecipe.save()
       res.status(201).json(newRecipe)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteRecipe = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No recipe with that id')

    await RecipeModel.findByIdAndRemove(id)

    res.json({message: 'Recipe deleted successfully'})
}