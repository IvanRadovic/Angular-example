import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shooping-lis',
  templateUrl: './shooping-lis.component.html',
  styleUrls: ['./shooping-lis.component.css'],
})
export class ShoopingLisComponent {
  ingredients!: Ingredient[];

  constructor(private slService: ShoppingListService){

  }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();

    //prikazujemo copiju originalnog niza updejtovanu na ovaj nacin
    this.slService.ingredientsChange.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
