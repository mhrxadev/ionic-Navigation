import { Injectable } from '@angular/core';
import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: ICourse[] = [
    {
      id: 1,
      name: "angular",
      image: "../../assets/images/angular logo.png",
      tag: ["angular", "angular free toturial"]
    },
    {
      id: 2,
      name: "ionic",
      image: "../../assets/images/ionic-logo.jpg",
      tag: ["ionic", "ionic free toturial"]
    },
    {
      id: 3,
      name: 'MongoDB',
      image: "../../assets/images/mongodb.png",
      tag: ["MongoDB", "MongoDB free toturial"]
    }
  ];

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipeById(reciptId: Number) {
    return { ...this.recipes.find(recipe => recipe.id === reciptId) };
  }

  removeCourseFromRecipe(recipeId: Number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  };
}


