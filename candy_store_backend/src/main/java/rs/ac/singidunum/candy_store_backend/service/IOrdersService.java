package rs.ac.singidunum.candy_store_backend.service;

import rs.ac.singidunum.candy_store_backend.entity.Orders;
import rs.ac.singidunum.candy_store_backend.model.OrdersModel;

import java.util.List;

public interface IOrdersService {
    List<Orders> findAllPendingOrdersByUsername(String username);
    List<Orders> findAllHistoryOrdersByUsername(String username);
    void deleteById(String id);
    Orders insert(OrdersModel model);
    Orders update(OrdersModel model);
    Orders changeStatus(OrdersModel model);
}
