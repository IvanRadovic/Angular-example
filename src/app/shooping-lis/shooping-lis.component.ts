import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-lis',
  templateUrl: './shooping-lis.component.html',
  styleUrls: ['./shooping-lis.component.css']
})
export class ShoopingLisComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Bananas',3),
    new Ingredient('Tomatoes',2),
  ];

  constructor(){

  }

  ngOnInit(){

  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);

  }

}
