import express from 'express';
import { getRecipes, createRecipe } from '../controllers/recipeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getRecipes).post(protect, createRecipe);

export default router;
