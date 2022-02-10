package com.example.graduationprocessbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import com.example.graduationprocessbackend.model.*;
import com.example.graduationprocessbackend.repository.AcademicWorkerRepository;
import com.example.graduationprocessbackend.repository.ThesisRepository;
import com.example.graduationprocessbackend.repository.StudentHasThesisRepository;
import com.example.graduationprocessbackend.repository.UserRepository;
import com.example.graduationprocessbackend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.example.graduationprocessbackend.exception.ResourceNotFoundException;


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

    @Autowired
    private AcademicWorkerRepository academicWorkerRepository;

    // get all thesis for logged student
    @GetMapping("/thesis")
    public List<Thesis> getAllThesis(@AuthenticationPrincipal UserDetailsImpl user){
        System.out.println("Id zalogowanego usera: " + user.getId());
        return thesisRepository.findByUserId(user.getId());
        //return thesisRepository.findAll();
    }

    // get all thesis for promoter
    @GetMapping("/thesis-promoter")
    public List<Thesis> getPromoterThesis(@AuthenticationPrincipal UserDetailsImpl user){
        System.out.println("Id zalogowanego promotora: " + user.getId());
        return thesisRepository.findByPromoterId(user.getId());
        //return thesisRepository.findAll();
    }

    //  get all thesis for reviewer
    @GetMapping("/thesis-reviewer")
    public List<Thesis> getReviewerThesis(@AuthenticationPrincipal UserDetailsImpl user){
        return thesisRepository.findByReviewerId(user.getId());
    }


    @GetMapping("/reviews-student")
    public List<Thesis> getReviewsForStudent(@AuthenticationPrincipal UserDetailsImpl user){
        return thesisRepository.findReviewsByStudentId(user.getId());
    }

    // get all realized thesis for promoter
    @GetMapping("/thesis-promoter/realized")
    public List<Thesis> getPromoterRealizedThesis(@AuthenticationPrincipal UserDetailsImpl user){
        return thesisRepository.findByFinishedForPromoterId(user.getId());
        //return thesisRepository.findAll();
    }


    // get all thesis for deans representative
    @GetMapping("/thesis-realized")
    public List<Thesis> getAllRealizedThesis(){
        return thesisRepository.findByStatus(EStatus.zrealizowana);
    }

    // get all thesis for deans representative with negative grade
    @GetMapping("/thesis-negative")
    public List<Thesis> getAllNegativeThesis(){
        return thesisRepository.findByNegativeGrade();
    }

    // get all thesis
    @GetMapping("/thesis-all")
    public List<Thesis> getAllThesis(){
        return thesisRepository.findAll();
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

    // get available promoters
    @GetMapping("/thesis/promoters")
    public List<AcademicWorker> getAvailablePromoters(){
        System.out.println(academicWorkerRepository.findAvailableAcademicWorkers());
        return academicWorkerRepository.findAvailableAcademicWorkers();
        //return thesisRepository.findAll();
    }

    @PutMapping("/thesis/{thesisId}/promoters/{promoterId}")
    Boolean enrollPromoterToThesis(
            @PathVariable int thesisId,
            @PathVariable int promoterId
    ) {
        academicWorkerRepository.addThesisHasPromoter(thesisId, promoterId);
        return true;
    }

    @PutMapping("/thesis/{thesisId}/reviewers/{reviewerId}")
    Boolean enrollReviewerToThesis(
            @PathVariable int thesisId,
            @PathVariable int reviewerId
    ) {
        academicWorkerRepository.addThesisHasReviewer(thesisId, reviewerId);
        return true;
    }

    @PutMapping("/thesis/{thesisId}/reviewers/{reviewerId}/oldReviewer/{oldReviewerId}")
    Boolean deleteReviewerToThesis(
            @PathVariable int thesisId,
            @PathVariable int reviewerId,
            @PathVariable int oldReviewerId
    ) {
        academicWorkerRepository.updateThesisHasReviewer(reviewerId, thesisId, oldReviewerId);
        return true;
    }

}