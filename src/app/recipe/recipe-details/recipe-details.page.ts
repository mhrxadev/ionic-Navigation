import { RecipeService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/recipe/course';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecip: ICourse;
  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private alertCTR: AlertController
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = parseInt(params.get('recipeId'));
      this.loadedRecip = this.recipeService.getRecipeById(recipeId);
    });

  }

  removeRecipe() {
    this.alertCTR.create({
      header: `Delete ${this.loadedRecip.name}`,
      message: `Do you realy want to delete ${this.loadedRecip.name} ?`,
      buttons: [
        {
          text: 'Cancle',
          role: 'cancle'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.removeCourseFromRecipe(this.loadedRecip.id);
            this.router.navigate(['/recipe']);
          }
        }
      ]
    }).then(alertElem => alertElem.present());
  }



}
