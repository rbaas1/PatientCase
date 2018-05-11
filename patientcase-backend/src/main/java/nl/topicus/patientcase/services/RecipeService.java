package nl.topicus.patientcase.services;

import nl.topicus.patientcase.models.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface RecipeService extends CrudRepository<Recipe, Long> {

    List<Recipe> findByName(String name);

    Recipe findOneByName(String name);

}
