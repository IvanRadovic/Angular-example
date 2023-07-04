import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shooping-lis/shopping-list.service";

@Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe(
            'Tasty schnistzel',
            'Super tasty!', 
            'https://media.istockphoto.com/id/603258520/photo/schnitzel-and-fried-potatoes.jpg?s=612x612&w=0&k=20&c=RXAndwtpKN2XUvV_TCkCQCfdlQ6sjJXTOiNpq7Kphs0=',
            [
                new Ingredient('Meat',1),
                new Ingredient('Franch fries',21),
            ]
            ),
        new Recipe(
            'A big fat Burger',
            'What else you need to say', 
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwYnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
            [
                new Ingredient('Meat',15),
                new Ingredient('Buns',2),
            ]
            ),      
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice()
    }

    getRecipe(index:number){
        return this.recipes.slice()[index];
    }

    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
    
}