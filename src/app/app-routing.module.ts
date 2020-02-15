import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'recipe',
    children: [{
      path: '',
      loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipePageModule)
    },
    {
      path: ':recipeId',
      loadChildren: () => import('./recipe/recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule)
    }
]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
