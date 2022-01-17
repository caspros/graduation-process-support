package com.example.graduationprocessbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.graduationprocessbackend.model.Thesis;

@Repository
public interface ThesisRepository extends JpaRepository<Thesis, Integer> {

}
