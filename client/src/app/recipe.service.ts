import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import {recipe, ResponseMessage} from 'src/app/model'
const URL_POST_API_REGISTER = "http://localhost:8080/api/recipe"

@Injectable()
export class recipeService{

  constructor(private http: HttpClient){}

  getAllRecipes(): Promise<recipe[]>{
    return lastValueFrom(this.http.get<recipe[]>(`http://localhost:8080/api/recipes`)
    )
  }

  getRecipe(id: string): Promise<recipe>{
    return lastValueFrom(this.http.get<recipe>(`http://localhost:8080/api/recipe/${id}`))
  }

  sendtoServer(recipe:recipe):Promise<ResponseMessage>{
    const headers = new HttpHeaders().set("Content-Type","application/json");
    return lastValueFrom(this.http.post<ResponseMessage>(URL_POST_API_REGISTER,JSON.stringify(recipe),{headers:headers}))
  }

}
