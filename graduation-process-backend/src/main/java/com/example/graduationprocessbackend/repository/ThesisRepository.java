package com.example.graduationprocessbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.graduationprocessbackend.model.Thesis;
import java.util.List;

@Repository
public interface ThesisRepository extends JpaRepository<Thesis, Integer> {
    @Query(value = "SELECT * FROM student_has_thesis sht JOIN thesis t WHERE sht.user_id = ?1 AND sht.thesis_id = t.id" , nativeQuery = true)
    List<Thesis> findByUserId(Integer id);
}
