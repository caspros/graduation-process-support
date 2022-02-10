package com.example.graduationprocessbackend.repository;
import com.example.graduationprocessbackend.model.EStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.graduationprocessbackend.model.Thesis;
import java.util.List;

@Repository
public interface ThesisRepository extends JpaRepository<Thesis, Integer> {
    @Query(value = "SELECT * FROM student_has_thesis sht JOIN thesis t WHERE sht.user_id = ?1 AND sht.thesis_id = t.id" , nativeQuery = true)
    List<Thesis> findByUserId(Integer id);
    @Query(value = "SELECT * FROM thesis_has_promoter thp JOIN thesis t WHERE thp.id_user = ?1 AND thp.id_thesis = t.id" , nativeQuery = true)
    List<Thesis> findByPromoterId(Integer id);
    List<Thesis> findByStatus(EStatus status);
    @Query(value = "SELECT * FROM thesis_has_reviewer thp JOIN thesis t WHERE thp.id_user = ?1 AND thp.id_thesis = t.id" , nativeQuery = true)
    List<Thesis> findByReviewerId(Integer id);
    @Query(value = "SELECT * FROM thesis_has_promoter thp JOIN thesis t WHERE thp.id_user = ?1 AND thp.id_thesis = t.id AND t.status='zrealizowana'" , nativeQuery = true)
    List<Thesis> findByFinishedForPromoterId(Integer id);


}
