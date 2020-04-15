package com.dbs.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dbs.demo.model.Parameter;
import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ParameterRepository extends JpaRepository<Parameter, Integer> {
    @Query(value = "SELECT * FROM Parameter_Category_info", nativeQuery = true)
    List<Parameter> show();
}

