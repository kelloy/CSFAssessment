package ibf2021.assessment.csf.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
@RequestMapping(path="/api/recipe",produces= MediaType.APPLICATION_JSON_VALUE)

public class RecipeRestController{

    @Autowired
    private RecipeService recipeSvc;

    @GetMapping(path = "{id}")
    public ResponseEntity<String> getRecipe(@PathVariable String id){
        Recipe recipe = recipeSvc.getRecipeById(id).orElse(null);

        if (recipe == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERROR 404 RECIPE NOT FOUND");
        }
        JsonArrayBuilder ingredients = Json.createArrayBuilder();
            
        for (String ingredient: recipe.getIngredients()){
            ingredients.add(ingredient);
            }
        JsonArray ingredientlist  = ingredients.build();
        JsonObject o = Json.createObjectBuilder().add("id",recipe.getId()).add("title",recipe.getTitle()).add("instructions",recipe.getInstruction()).add("ingredients",ingredientlist).add("image",recipe.getImage()).build();
        return ResponseEntity.status(HttpStatus.OK).body(o.toString());
        
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postRecipe(@RequestBody Recipe recipe ){
        recipeSvc.addRecipe(recipe);
        System.out.println(recipe.getId());
        System.out.println(recipe.getImage());
        System.out.println(recipe.getIngredients()); 
        return ResponseEntity.status(HttpStatus.CREATED).body("ok");
        
    }
        
    }




    