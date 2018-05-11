import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Patient } from './patient';
import { Recipe } from './recipe';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Promise<Patient[]> {
    return this.http.get('/api/patients')
      .toPromise()
      .then(response => response as Patient[])
      .catch(this.handleError);
  }

  getPatientById(id: number): Promise<Patient> {
    return this.http.get('/api/patient/' + id)
      .toPromise()
      .then(response => response as Patient)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  newPatient(firstName: string, lastName: string, birthDate: Date){
    var body = {
      "firstName": firstName,
      "lastName": lastName,
      "birthDate": birthDate
    }
    return this.http.post('/api/patient/new', body)
      .toPromise()
      .then(response => {return})
      .catch(this.handleError);
  }

  updatePatient(patient: Patient) {
    return this.http.post('/api/patient/new', patient)
      .toPromise()
      .then(response => {return})
      .catch(this.handleError);
  }

  addRecipeToPatient(patient: Patient, recipe: Recipe){
    patient.recipes.push(recipe);
    this.updatePatient(patient);
  }

}
