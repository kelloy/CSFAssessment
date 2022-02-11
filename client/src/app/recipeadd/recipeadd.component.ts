import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ingredient, recipe } from '../model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeadd',
  templateUrl: './recipeadd.component.html',
  styleUrls: ['./recipeadd.component.css']
})
export class RecipeaddComponent implements OnInit {

  form!:FormGroup
  formArray!:FormArray
  recipe!:recipe

  constructor(private fb:FormBuilder,private recipeSvc:recipeService) { }

  ngOnInit(): void {
    this.formArray = this.fb.array([])
    this.form = this.createForm();
    this.formArray = this.form.get('lineItems') as FormArray
  }

  createForm(): FormGroup{
    return this.fb.group({
      title: this.fb.control('',[Validators.required,Validators.minLength(3)]),
      instructions: this.fb.control('',[Validators.required,Validators.minLength(3)]),
      image: this.fb.control('',[Validators.required,Validators.minLength(3)]),
      lineItems: this.createLineItems()
    })
  }

  addIngredient(){
    this.formArray.push(this.createLineItem())

  }

  deleteIngredient(i:number){
    this.formArray.removeAt(i)

  }

  save(){
    const data = this.form.value as recipe
    console.info(data)
    this.recipeSvc.sendtoServer(data)
    .then(result =>{
      console.info('>>>> result: ', result);
    }).catch(error =>{
      alert("An Error Has Occured")
      console.info(">>>>error: ", error)
    })
  }

  private createLineItem(li: Partial<ingredient> = {}):FormGroup{
    return this.fb.group({
      ingredient: this.fb.control('',[Validators.minLength(3), Validators.required]),
    })
  }

  private createLineItems(li: ingredient[] = []): FormArray{
    const lis = this.fb.array([],[Validators.minLength(1)])
    for (let l of li)
      lis.push(this.createLineItem())
    return lis
  }






  }

