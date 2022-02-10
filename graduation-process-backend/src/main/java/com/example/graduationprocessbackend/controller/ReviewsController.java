package com.example.graduationprocessbackend.controller;

import com.example.graduationprocessbackend.model.*;
import com.example.graduationprocessbackend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ReviewsController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentHasThesisRepository studentHasThesisRepository;

    @Autowired
    private AcademicWorkerRepository academicWorkerRepository;

    // create thesis rest api
    @PostMapping("/create-review")
    public Review createReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }
}
