package nl.topicus.patientcase.services;

import nl.topicus.patientcase.models.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface PatientService extends CrudRepository<Patient, Long> {

    List<Patient> findByLastName(String lastName);

}
