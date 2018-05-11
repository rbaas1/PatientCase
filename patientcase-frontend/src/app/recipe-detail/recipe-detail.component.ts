import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeName: string;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeName = params['naam'];
    });
    this.recipeService.getRecipeByName(this.recipeName).then(recipe => this.recipe = recipe);
  }

  goBack(): void{
    this.location.back();
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.recipe);
  }

}
