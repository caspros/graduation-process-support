package com.example.graduationprocessbackend.repository;

import com.example.graduationprocessbackend.model.EStatus;
import com.example.graduationprocessbackend.model.Review;
import com.example.graduationprocessbackend.model.Thesis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
