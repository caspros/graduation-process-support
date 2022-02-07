package com.example.graduationprocessbackend.repository;
import com.example.graduationprocessbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.graduationprocessbackend.model.Thesis;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface ThesisRepository extends JpaRepository<Thesis, Integer> {
}
