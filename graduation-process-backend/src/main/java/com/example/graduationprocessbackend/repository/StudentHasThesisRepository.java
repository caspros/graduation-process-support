package com.example.graduationprocessbackend.repository;

import com.example.graduationprocessbackend.model.Thesis;
import com.example.graduationprocessbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface StudentHasThesisRepository extends JpaRepository<Thesis, User> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO student_has_thesis (user_id, thesis_id) VALUES (?1, ?2)" , nativeQuery = true)
    void addStudentHasThesis(Integer userId, Integer thesisId);
}
