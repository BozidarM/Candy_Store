package rs.ac.singidunum.candy_store_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.candy_store_backend.entity.Comments;

import java.util.List;

public interface ICommentsRepository extends MongoRepository<Comments, String> {
    List<Comments> findAllByCandiesId(String candiesId);
    Comments findCommentsById(String id);
}
