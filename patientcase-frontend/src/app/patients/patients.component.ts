import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Location } from '@angular/common';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  newPatientFirstName: string;
  newPatientLastName: string;
  newPatientBirthDate: Date;

  constructor(private patientService: PatientService, private location: Location) {}

  ngOnInit() {
    this.patientService.getPatients().then(patients => this.patients = patients);
  }

  getPatientById(id: number): Patient {
    this.patientService.getPatientById(id).then(patient => {return patient});
    return null;
  }

  newPatient() {
    this.patientService.newPatient(this.newPatientFirstName, this.newPatientLastName, this.newPatientBirthDate)
      .then(response => {this.ngOnInit()});
  }

}
