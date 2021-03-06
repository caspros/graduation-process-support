package com.example.graduationprocessbackend.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}

	@GetMapping("/student")
	@PreAuthorize("hasRole('STUDENT')")
	public String studentAccess() {
		return "Student Board.";
	}

	@GetMapping("/commission")
	@PreAuthorize("hasRole('PROGRAM_COMMISSION')")
	public String commissionAccess() {
		return "Commision Board.";
	}

	@GetMapping("/universityemployee")
	@PreAuthorize("hasRole('UNIVERSITY_EMPLOYEE')")
	public String universityemployeeAccess() {
		return "Employye Board.";
	}

	@GetMapping("/deansrepresenative")
	@PreAuthorize("hasRole('ROLE_DEANS_REPRESENTATIVE')")
	public String deansrepresenativeAccess() { return "Deans Board."; }
}
