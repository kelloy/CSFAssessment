import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipeaddComponent } from './recipeadd/recipeadd.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { recipeService } from './recipe.service';
const appRoute:Routes=[{path:'',component:RecipelistComponent},
{path:'recipe/:id',component:RecipedetailComponent},
{path:'add',component:RecipeaddComponent},
{path:'**',redirectTo:'/',pathMatch:'full'}]

@NgModule({
  declarations: [
    AppComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
