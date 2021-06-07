package rs.ac.singidunum.candy_store_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.candy_store_backend.entity.Orders;

import java.util.List;

public interface IOrdersRepository extends MongoRepository<Orders, String> {
    List<Orders> findAllByUsername(String username);
    Orders findOrdersById(String id);
}
