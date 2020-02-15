import { Component, OnInit } from '@angular/core';
import { ICourse } from './course';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes: ICourse[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getAllRecipes();
  }

ionViewWillEnter() {
  this.recipes = this.recipeservice.getAllRecipes();
}


}
