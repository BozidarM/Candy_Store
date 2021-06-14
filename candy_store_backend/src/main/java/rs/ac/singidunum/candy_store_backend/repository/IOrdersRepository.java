package rs.ac.singidunum.candy_store_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.candy_store_backend.entity.Orders;

import java.util.List;

public interface IOrdersRepository extends MongoRepository<Orders, String> {
    @Query(value = "{'status':'pending', 'username': {$regex : ?0, $options: 'i'}}}")
    List<Orders> findAllPendingOrdersByUsername(String username);
    @Query(value = "{ $or: [{'status':'completed'}, {'status':'canceled'}], 'username': {$regex : ?0, $options: 'i'}}}")
    List<Orders> findAllHistoryOrdersByUsername(String username);
    Orders findOrdersById(String id);
}
