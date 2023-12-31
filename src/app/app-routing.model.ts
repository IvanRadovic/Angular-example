import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoopingLisComponent } from "./shooping-lis/shooping-lis.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes : Routes = [
    { path:'', redirectTo:"/recipes", pathMatch:'full'},
    { path:'recipes', component:RecipesComponent, 
        children:[
         {path:'', component:RecipeStartComponent},
         {path:'new', component:RecipeEditComponent},
         {path:':id', component:RecipeDetailComponent},
         {path:':id/edit', component:RecipeEditComponent},
        ]
    },
    { path:'shopping-list', component:ShoopingLisComponent},
]

@NgModule({

    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]



})
export class AppRoutingModule{

}