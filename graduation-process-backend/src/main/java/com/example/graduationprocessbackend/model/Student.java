package com.example.graduationprocessbackend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;


@Entity
@Table(	name = "students" )
public class Student {
    @Id
    private int id_user;

    @NotBlank
    @Size(max = 255)
    private String first_name;

    @NotBlank
    @Size(max = 255)
    private String last_name;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable( name = "thesis_has_promoter",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_thesis"))
    private Collection<Thesis> thesisEnrolledToPromoters = new ArrayList<>();

    public Student() {
    }


    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public Collection<Thesis> getThesisEnrolledToPromoters() {
        return thesisEnrolledToPromoters;
    }

    public void setThesisEnrolledToPromoters(Collection<Thesis> thesisEnrolledToPromoters) {
        this.thesisEnrolledToPromoters = thesisEnrolledToPromoters;
    }
}
