package com.dbs.demo.repository;

import com.dbs.demo.model.Observation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;



// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ObservationRepository extends JpaRepository<Observation, Integer> {
    @Query(value = "SELECT * FROM Special_value_observation_info LIMIT 100", nativeQuery = true)
    List<Observation> show();
}
