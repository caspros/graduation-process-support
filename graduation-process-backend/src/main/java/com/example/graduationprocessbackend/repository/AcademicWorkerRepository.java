package com.example.graduationprocessbackend.repository;

import com.example.graduationprocessbackend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public interface AcademicWorkerRepository extends JpaRepository<AcademicWorker, Integer> {
	@Query(value = "SELECT * FROM academic_worker aw WHERE aw.salary > 0" , nativeQuery = true)
	List<AcademicWorker> findAvailableAcademicWorkers();
	@Transactional
	@Modifying
	@Query(value = "INSERT INTO thesis_has_promoter (id_thesis, id_user) VALUES (?1, ?2)" , nativeQuery = true)
	void addThesisHasPromoter(Integer thesisId, Integer userId);
	@Transactional
	@Modifying
	@Query(value = "INSERT INTO thesis_has_reviewer (id_thesis, id_user) VALUES (?1, ?2)" , nativeQuery = true)
	void addThesisHasReviewer(Integer thesisId, Integer userId);
	@Transactional
	@Modifying
	@Query(value = "UPDATE thesis_has_reviewer SET id_user = ?1 WHERE id_thesis = ?2 AND id_user = ?3" , nativeQuery = true)
	void updateThesisHasReviewer(Integer newReviewerId, Integer thesisId, Integer userId);
}
