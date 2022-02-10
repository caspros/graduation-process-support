package com.example.graduationprocessbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(	name = "reviews" )
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_review;

    @NotNull
    private int id_thesis;

    @NotNull
    private int id_user;

    @NotBlank
    private String grade;

    @NotBlank
    private String review_description;

    @CreatedDate
    private Date creation_date;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="id_thesis", referencedColumnName = "id", insertable = false, updatable = false)
    private Thesis thesis;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="id_user", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

    public Review() {
    }

    public void setId(int id_review) {
        this.id_review = id_review;
    }

    public int getId() {
        return id_review;
    }

    public void setReview_description(String review_description) {
        this.review_description = review_description;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public String getGrade() {
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

    public int getId_review() {
        return id_review;
    }

    public void setId_review(int id_review) {
        this.id_review = id_review;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public int getId_thesis() {
        return id_thesis;
    }

    public void setId_thesis(int id_thesis) {
        this.id_thesis = id_thesis;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
}
