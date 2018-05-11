import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get('/api/recipes')
      .toPromise()
      .then(response => response as Recipe[])
      .catch(this.handleError);
  }

  getRecipeByName(name: string): Promise<Recipe> {
    return this.http.get('/api/recipe/' + name)
      .toPromise()
      .then(response => response as Recipe)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  newRecipe(name: string, dosage: number, dosageType: string){
    var body = {
      "name": name,
      "dosage": dosage,
      "dosageType": dosageType
    }
    return this.http.post('/api/recipe/new', body)
      .toPromise()
      .then(response => {return})
      .catch(this.handleError);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.post('/api/recipe/new', recipe)
      .toPromise()
      .then(response => {return})
      .catch(this.handleError);
  }

}
