package com.example.graduationprocessbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.graduationprocessbackend.model.User;
import com.example.graduationprocessbackend.repository.ThesisRepository;
import com.example.graduationprocessbackend.repository.StudentHasThesisRepository;
import com.example.graduationprocessbackend.repository.UserRepository;
import com.example.graduationprocessbackend.security.jwt.AuthTokenFilter;
import com.example.graduationprocessbackend.security.jwt.JwtUtils;
import com.example.graduationprocessbackend.security.services.UserDetailsImpl;
import com.example.graduationprocessbackend.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.example.graduationprocessbackend.exception.ResourceNotFoundException;
import com.example.graduationprocessbackend.model.Thesis;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ThesisController {

    @Autowired
    private ThesisRepository thesisRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentHasThesisRepository studentHasThesisRepository;

    // get all thesis
    @GetMapping("/thesis")
    public List<Thesis> getAllThesis(@AuthenticationPrincipal UserDetailsImpl user){
        System.out.println("Id zalogowanego usera: " + user.getId());
        return thesisRepository.findByUserId(user.getId());
        //return thesisRepository.findAll();
    }

    @PutMapping("/thesis/{thesisId}/students/{studentId}")
    Thesis enrollStudentToThesis(
            @PathVariable int thesisId,
            @PathVariable int studentId
    ) {
        Thesis thesis = thesisRepository.findById(thesisId)
                .orElseThrow(() -> new ResourceNotFoundException("Thesis not exist with id :" + thesisId));
        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + studentId));
//        System.out.println("Thesis: " + thesis);
//        System.out.println("Student: " + student);

        studentHasThesisRepository.addStudentHasThesis(studentId, thesisId);
        return thesisRepository.save(thesis);
    }

    // create thesis rest api
    @PostMapping("/create-thesis")
    public Thesis createThesis(@RequestBody Thesis thesis) {
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