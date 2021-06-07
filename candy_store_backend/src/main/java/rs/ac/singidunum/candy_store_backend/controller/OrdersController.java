package rs.ac.singidunum.candy_store_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.candy_store_backend.entity.Orders;
import rs.ac.singidunum.candy_store_backend.model.OrdersModel;
import rs.ac.singidunum.candy_store_backend.service.OrdersService;

import java.util.List;

@RestController
@RequestMapping("orders")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @GetMapping("all/{username}")
    @CrossOrigin(origins = "*")
    public List<Orders> findAllByUsername(@PathVariable("username") String username){ return ordersService.findAllByUsername(username); }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Orders insert(@RequestBody OrdersModel model){
        return ordersService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.ordersService.deleteById(id);
    }
}
