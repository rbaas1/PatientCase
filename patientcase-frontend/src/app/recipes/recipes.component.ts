import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  newRecipeName: string;
  newRecipeDosage: number;
  newRecipeDosageType: string;

  constructor(private recipeService: RecipeService, private location: Location) { }

  ngOnInit() {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  getRecipeByName(name: string): Recipe {
    this.recipeService.getRecipeByName(name).then(recipe => {return recipe});
    return null;
  }

  newRecipe() {
    this.recipeService.newRecipe(this.newRecipeName, this.newRecipeDosage, this.newRecipeDosageType)
    .then(response => {this.ngOnInit()});
  }

}
