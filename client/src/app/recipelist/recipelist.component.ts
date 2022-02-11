import { Component, OnInit } from '@angular/core';
import { recipe } from '../model';
import { recipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipeArray: recipe[] = []

  constructor(private recipeSvc:recipeService, private router:Router) { }

  ngOnInit(): void {
    this.recipeSvc.getAllRecipes().then(result => {
      this.recipeArray = result
    })

  }

  go(id: string){
    console.log(id);
    this.router.navigate(['/recipe', id])
  }

  add(){
    this.router.navigate(['/add'])
  }

}
