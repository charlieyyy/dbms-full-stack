package com.dbs.demo.repository;

import com.dbs.demo.model.Metric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;



// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface MetricRepository extends JpaRepository<Metric, Integer> {
    @Query(value = "SELECT * FROM Measure_standard LIMIT 100", nativeQuery = true)
    List<Metric> show();
}

