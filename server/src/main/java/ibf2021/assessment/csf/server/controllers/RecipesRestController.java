package ibf2021.assessment.csf.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

@RestController
@RequestMapping(path="/api/recipes",produces= MediaType.APPLICATION_JSON_VALUE)

public class RecipesRestController{

    @Autowired
    private RecipeService recipeSvc;

    @GetMapping
    public ResponseEntity<String> getRecipes(){
        List<Recipe> recipelist = recipeSvc.getAllRecipes();
        JsonArrayBuilder recipeArray = Json.createArrayBuilder();

        for (Recipe r :recipelist){
            JsonObject o = Json.createObjectBuilder().add("id",r.getId()).add("title",r.getTitle()).build();
            recipeArray.add(o);
        }
        return ResponseEntity.status(HttpStatus.OK).body(recipeArray.build().toString());
        
    }
    
}
