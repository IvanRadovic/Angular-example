import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientsChange = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Bananas',3),
        new Ingredient('Tomatoes',2),
      ];
    
      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
      }

      addIngredients(ingredients : Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
      }
}