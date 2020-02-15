import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from 'src/app/recipe/course';

@Component({
  selector: 'app-item-recipe',
  templateUrl: './item-recipe.component.html',
  styleUrls: ['./item-recipe.component.scss'],
})
export class ItemRecipeComponent implements OnInit {

@Input() singleCourse: ICourse;

  constructor() { }

  ngOnInit() {}

}
