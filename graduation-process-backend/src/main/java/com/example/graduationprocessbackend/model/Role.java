package com.example.graduationprocessbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private com.example.graduationprocessbackend.model.ERole name;

	public Role() {

	}

	public Role(com.example.graduationprocessbackend.model.ERole name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public com.example.graduationprocessbackend.model.ERole getName() {
		return name;
	}

	public void setName(com.example.graduationprocessbackend.model.ERole name) {
		this.name = name;
	}
}