import { ItemRecipeComponent } from './item-recipe/item-recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePageRoutingModule } from './recipe-routing.module';

import { RecipePage } from './recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePageRoutingModule
  ],
  declarations: [RecipePage, ItemRecipeComponent]
})
export class RecipePageModule {}
