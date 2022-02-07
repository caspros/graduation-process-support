package com.example.graduationprocessbackend.repository;

import com.example.graduationprocessbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String email);
	Boolean existsByEmail(String email);
}
