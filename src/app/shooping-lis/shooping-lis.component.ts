import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-shooping-lis',
  templateUrl: './shooping-lis.component.html',
  styleUrls: ['./shooping-lis.component.css'],
})
export class ShoopingLisComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private igChangeSub?: Subscription;

  constructor(private slService: ShoppingListService){

  }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();

    //prikazujemo copiju originalnog niza updejtovanu na ovaj nacin
    this.igChangeSub = this.slService.ingredientsChange.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.igChangeSub?.unsubscribe();
  }

}
