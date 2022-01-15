package com.example.graduationprocessbackend.repository;

import com.example.graduationprocessbackend.model.ERole;
import com.example.graduationprocessbackend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
