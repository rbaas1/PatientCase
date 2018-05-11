package nl.topicus.patientcase.controllers;

import nl.topicus.patientcase.models.Patient;
import nl.topicus.patientcase.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/api/patients")
    public List<Patient> findAll(){
        return (List<Patient>) patientService.findAll();
    }

    @GetMapping(value = "/api/patients/{name}")
    public List<Patient> patientByLastName(@PathVariable String name) {
        return patientService.findByLastName(name);
    }

    @GetMapping(value = "/api/patient/{id}")
    public Optional<Patient> findById(@PathVariable long id) {
        return patientService.findById(id);
    }

    @PostMapping(value = "/api/patient/new")
    public long create(@RequestBody Patient patient) {
        return patientService.save(patient).getId();
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(value = "/api/patient/{id}")
    public void removePatient(@PathVariable long id) {
        patientService.deleteById(id);
    }

}
