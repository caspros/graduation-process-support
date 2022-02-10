package com.example.graduationprocessbackend.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(	name = "reviews" )
public class Review {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_review;

    @ManyToOne()
    @JoinColumn(name="id_thesis", referencedColumnName = "id", insertable = false, updatable = false)
    private Thesis thesis;

    @ManyToOne()
    @JoinColumn(name="id_user", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

    @NotBlank
    private double grade;

    @NotBlank
    private String review_description;

    @NotBlank
    @CreatedDate
    private Date creation_date;

    public Review() {
    }


    public void setId(int id_review) {
        this.id_review = id_review;
    }

    public int getId() {
        return id_review;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public void setReview_description(String review_description) {
        this.review_description = review_description;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public double getGrade() {
        return grade;
    }

    public String getReview_description() {
        return review_description;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public Thesis getThesis() {
        return thesis;
    }

    public void setThesis(Thesis thesis) {
        this.thesis = thesis;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
