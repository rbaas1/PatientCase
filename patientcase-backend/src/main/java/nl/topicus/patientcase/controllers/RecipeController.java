package nl.topicus.patientcase.controllers;

import nl.topicus.patientcase.models.Recipe;
import nl.topicus.patientcase.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes(){
        return (List<Recipe>) recipeService.findAll();
    }

    @GetMapping(value = "/api/recipes/{name}")
    public List<Recipe> recipeByLastName(@PathVariable String name) {
        return recipeService.findByName(name);
    }

    @GetMapping(value = "/api/recipe/{name}")
    public Recipe findOneRecipeByName(@PathVariable String name) {
        return recipeService.findOneByName(name);
    }

    @PostMapping(value = "/api/recipe/new")
    public void createRecipe(@RequestBody Recipe recipe) {
        recipeService.save(recipe);
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(value = "/api/recipe/{id}")
    public void removeRecipe(@PathVariable long id) {
        recipeService.deleteById(id);
    }

}
