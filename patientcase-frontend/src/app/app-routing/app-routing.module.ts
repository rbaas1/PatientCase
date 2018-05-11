import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PatientsComponent } from '../patients/patients.component';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patienten', component: PatientsComponent },
  { path: 'patient/:id', component: PatientDetailComponent },
  { path: 'recepten', component: RecipesComponent },
  { path: 'recept/:naam', component: RecipeDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
