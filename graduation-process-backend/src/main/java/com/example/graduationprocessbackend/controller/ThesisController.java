package com.example.graduationprocessbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.graduationprocessbackend.repository.ThesisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.graduationprocessbackend.exception.ResourceNotFoundException;
import com.example.graduationprocessbackend.model.Thesis;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ThesisController {

//    @Autowired
//    private Environment env;
//
//    String frontendUrl = env.getProperty("graduationprocessbackend.app.frontendUrl");

    @Autowired
    private ThesisRepository thesisRepository;

    // get all thesis
    @GetMapping("/thesis")
    public List<Thesis> getAllThesis(){
        return thesisRepository.findAll();
    }

    // create thesis rest api
    @PostMapping("/create-thesis")
    public Thesis createThesis(@RequestBody Thesis thesis) {
        //System.out.println(id_student);
        return thesisRepository.save(thesis);
    }

    // get thesis by id rest api
    @GetMapping("/thesis/{id}")
    public ResponseEntity<Thesis> getThesisById(@PathVariable int id) {
        Thesis thesis = thesisRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Thesis not exist with id :" + id));
        return ResponseEntity.ok(thesis);
    }

    // update thesis rest api

    @PutMapping("/thesis/{id}")
    public ResponseEntity<Thesis> updateThesis(@PathVariable int id, @RequestBody Thesis thesisDetails){
        Thesis thesis = thesisRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Thesis not exist with id :" + id));

        thesis.setTitle_pl(thesisDetails.getTitle_pl());
        thesis.setTitle_eng(thesisDetails.getTitle_eng());
        thesis.setShort_description(thesisDetails.getShort_description());
        thesis.setType(thesisDetails.getType());
        thesis.setStatus(thesisDetails.getStatus());

        Thesis updatedThesis = thesisRepository.save(thesis);
        return ResponseEntity.ok(updatedThesis);
    }

    // delete thesis rest api
    @DeleteMapping("/thesis/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteThesis(@PathVariable int id){
        Thesis thesis = thesisRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Thesis not exist with id :" + id));

        thesisRepository.delete(thesis);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}