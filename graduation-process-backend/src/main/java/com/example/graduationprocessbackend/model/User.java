package com.example.graduationprocessbackend.model;

import javax.persistence.*;
import java.io.Serializable;

//@Entity
public class User implements Serializable {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(nullable = false, updatable = false)
    private Long id;
    private String email;
    private String password;
    private String role;
}
