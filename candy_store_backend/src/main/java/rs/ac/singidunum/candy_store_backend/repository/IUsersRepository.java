package rs.ac.singidunum.candy_store_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.candy_store_backend.entity.Users;

public interface IUsersRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
    Users findByEmail(String email);
}
