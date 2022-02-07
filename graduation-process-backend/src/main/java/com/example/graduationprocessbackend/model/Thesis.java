package com.example.graduationprocessbackend.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
@Table(	name = "thesis" )
public class Thesis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany (mappedBy = "thesisEnrolled", cascade = CascadeType.ALL)
    private Collection<User> students = new ArrayList<>();

    @NotBlank
    @Size(max = 255)
    private String title_pl;

    @NotBlank
    @Size(max = 255)
    private String title_eng;

    @NotBlank
    @Size(max = 65535)
    private String short_description;

    @Enumerated(EnumType.STRING)
    private EType type;

    @Enumerated(EnumType.STRING)
    private EStatus status;

    @CreatedDate
    private Date creation_date;

    public Thesis() {
    }

    public Thesis(String title_pl, String title_eng) {
        this.title_pl = title_pl;
        this.title_eng = title_eng;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle_pl() {
        return title_pl;
    }

    public void setTitle_pl(String title_pl) {
        this.title_pl = title_pl;
    }

    public String getTitle_eng() {
        return title_eng;
    }

    public void setTitle_eng(String title_eng) {
        this.title_eng = title_eng;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    public EType getType() {
        return type;
    }

    public void setType(EType type) {
        this.type = type;
    }

    public EStatus getStatus() {
        return status;
    }

    public void setStatus(EStatus status) {
        this.status = status;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public Collection<User> getStudents() {
        return students;
    }

    public void setStudents(Collection<User> students) {
        this.students = students;
    }
}
