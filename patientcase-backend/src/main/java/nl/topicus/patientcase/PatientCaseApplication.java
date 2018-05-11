package nl.topicus.patientcase;

import nl.topicus.patientcase.models.Patient;
import nl.topicus.patientcase.models.Recipe;
import nl.topicus.patientcase.services.PatientService;

import nl.topicus.patientcase.services.RecipeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@SpringBootApplication
public class PatientCaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientCaseApplication.class, args);
	}

	@Bean
    public CommandLineRunner demo(PatientService patients, RecipeService recipes){
	    return (args) -> {
	        // Vul database met voorbeeldrecepten en patiënten
            List<Recipe> l = new ArrayList<>();
            Recipe r = new Recipe("Asperine", 500, "mg");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Medicijn X", 2, "tabletten");
            r.setDescription("Een placebo.");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Lembas bread", 1, "hapje");
            r.setDescription("Een hapje is genoeg voor een hele dag.");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Xanax", 1, "pil");
            r.setDescription("Generieke naam: Alprazolam.");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Codeïne", 1, "pil");
            r.setDescription("Pijnstiller, werkt tegen kriebelhoest.");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Nasacort", 1, "eenheid");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Tamoxifen", 1, "eenheid");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Morfine", 1, "eenheid");
            recipes.save(r);
            l.add(r);
            r = new Recipe("Prednisolol acetaat+benzalkoniumchloride", 1, "druppel per oog");
            r.setDescription("Oogdruppels.");
            recipes.save(r);
            l.add(r);

            Patient p = new Patient("Iemand", "Anders", LocalDate.of(1965, 3, 9), "23456235789", "v", "Straatstraat 153", "1234AB", "1234567", "Werkstraat 3", "1234AB");
            p.addRecipe(l.get(5));
            patients.save(p);
            p = new Patient("Niemand", "Anders", LocalDate.of(1966, 7, 21), "5343896710", "v", "Straatstraat 153", "1234AB", "1234567", "Arbeidstraat 33", "1234AB");
            p.addRecipe(l.get(7));
            patients.save(p);
            p = new Patient("Bilbo", "Baggins", LocalDate.of(1690, 6, 12), "12345678910", "m", "The Shire", "1111TS", "000000", "", "");
            p.addRecipe(l.get(1));
            p.addRecipe(l.get(0));
            patients.save(p);
            p = new Patient("Frodo", "Baggins", LocalDate.of(1750, 6, 12));
            p.setGender("m");
            p.setHomeAddress("The Shire");
            p.setWorkAddress("Mount Doom");
            p.addRecipe(l.get(2));
            patients.save(p);
            p = new Patient("Naam", "Achternaam", LocalDate.of(2000, 1, 1));
            p.setGender("m");
            p.addRecipe(l.get(8));
            patients.save(p);

        };
    }

}
