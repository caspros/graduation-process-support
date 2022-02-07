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
}
