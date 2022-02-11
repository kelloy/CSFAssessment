import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe } from '../model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  id = ''
  recipe! : recipe;

  constructor(private activatedRoute:ActivatedRoute, private recipeSvc:recipeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
    this.recipeSvc.getRecipe(this.id).then(recipe => this.recipe = recipe)
  }

  back(){
    this.router.navigate(['/'])
  }

}
