import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  providers: [RecipeService]
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;
  patientId: number;
  newRecipe: Recipe;
  recipes: Recipe[]

  constructor(private patientService: PatientService,
    private recipeService: RecipeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientId = params['id'];
    });
    this.getData();
  }
  
  getData() {
    this.patientService.getPatientById(this.patientId).then(patient => this.patient = patient);
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  goBack(): void{
    this.location.back();
  }

  updatePatient() {
    this.patientService.updatePatient(this.patient).then(response => this.getData());
  }

  addRecipe() {
    this.patientService.addRecipeToPatient(this.patient, this.newRecipe);
  }

  removeRecipe(r: Recipe){
    this.patient.recipes = this.patient.recipes.filter(recipe => recipe !== r);
    this.updatePatient();
  }

}
