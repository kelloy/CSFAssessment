import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipeaddComponent } from './recipeadd/recipeadd.component';
import { Routes } from '@angular/router';
const appRoute:Routes=[{path:'/',component:RecipelistComponent},
{path:'/recipe/:recipeId',component:RecipedetailComponent},
{path:'/add',component:RecipeaddComponent},
{path:''}]

@NgModule({
  declarations: [
    AppComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeaddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
