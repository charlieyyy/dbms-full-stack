package com.dbs.demo.repository;

import com.dbs.demo.model.Measure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface MeasureRepository extends JpaRepository<Measure, Integer> {
    @Query(value = "SELECT * FROM Pollutant_measure_result LIMIT 100", nativeQuery = true)
    List<Measure> show();

    @Query(value = "CALL Stored_precedure(:parameter);", nativeQuery = true)
    List<String> getParameterAvg(@Param("parameter") String parameter);

    @Query(value = "SELECT * FROM most_severe_PM_location;", nativeQuery = true)
    List<String> showCity();
}
