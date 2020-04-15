package com.dbs.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dbs.demo.model.Location;
import java.util.List;



// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface LocationRepository extends JpaRepository<Location, Integer> {
    @Query(value = "SELECT * FROM Location_Info", nativeQuery = true)
    List<Location> show();
}
