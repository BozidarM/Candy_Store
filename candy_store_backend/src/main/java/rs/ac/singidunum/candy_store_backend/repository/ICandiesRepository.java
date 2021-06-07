package rs.ac.singidunum.candy_store_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.candy_store_backend.entity.Candies;

import java.time.LocalDate;
import java.util.List;

public interface ICandiesRepository extends MongoRepository<Candies, String> {
    Candies findCandiesById(String id);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Candies> findAllByName(String name);
    @Query(value = "{'category': {$regex : ?0, $options: 'i'}}")
    List<Candies> findAllByCategory(String category);
    @Query(value = "{'dateCreated': {$regex : ?0, $options: 'i'}}")
    List<Candies> findAllByDate(LocalDate date);
    List<Candies> findAllByRating(int rating);

}
