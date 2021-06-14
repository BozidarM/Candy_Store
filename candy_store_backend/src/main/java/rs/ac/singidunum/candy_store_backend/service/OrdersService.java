package rs.ac.singidunum.candy_store_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.candy_store_backend.entity.Orders;
import rs.ac.singidunum.candy_store_backend.entity.Users;
import rs.ac.singidunum.candy_store_backend.model.OrdersModel;
import rs.ac.singidunum.candy_store_backend.repository.IOrdersRepository;
import rs.ac.singidunum.candy_store_backend.repository.IUsersRepository;

import java.util.List;

@Service
public class OrdersService implements IOrdersService{

    @Autowired
    private IOrdersRepository ordersRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public List<Orders> findAllPendingOrdersByUsername(String username){
        return ordersRepository.findAllPendingOrdersByUsername(username);
    }

    @Override
    public List<Orders> findAllHistoryOrdersByUsername(String username){
        return ordersRepository.findAllHistoryOrdersByUsername(username);
    }

    @Override
    public Orders insert(OrdersModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        model.setAddress(user.getAddress());
        model.setCity(user.getCity());

        return ordersRepository.insert(autoMapperService.map(model, Orders.class));
    }

    @Override
    public Orders update(OrdersModel model){
        Orders order = ordersRepository.findOrdersById(model.getId());

        order.setCity(model.getCity());
        order.setAddress(model.getAddress());
        order.setPayment(model.getPayment());

        this.ordersRepository.save(order);

        return autoMapperService.map(model, Orders.class);
    }

    @Override
    public Orders changeStatus(OrdersModel model){
        Orders order = ordersRepository.findOrdersById(model.getId());

        order.setStatus(model.getStatus());

        this.ordersRepository.save(order);

        return autoMapperService.map(model, Orders.class);
    }

    @Override
    public void deleteById(String id){
        this.ordersRepository.deleteById(id);
    }
}
