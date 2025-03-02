import Recipe from '../models/Recipe.js';

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createRecipe = async (req, res) => {
    const { name, ingredients, instructions, image } = req.body;
    try {
        const newRecipe = new Recipe({ 
            name, ingredients, instructions, image, user: req.user._id 
        });
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: 'Error creating recipe' });
    }
};
