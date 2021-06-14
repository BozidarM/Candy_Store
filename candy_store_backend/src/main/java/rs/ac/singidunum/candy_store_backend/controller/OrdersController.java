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
    public List<Orders> findAllPendingOrdersByUsername(@PathVariable("username") String username){ return ordersService.findAllPendingOrdersByUsername(username); }

    @GetMapping("all-history/{username}")
    @CrossOrigin(origins = "*")
    public List<Orders> findAllHistoryOrdersByUsername(@PathVariable("username") String username){ return ordersService.findAllHistoryOrdersByUsername(username); }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Orders insert(@RequestBody OrdersModel model){
        return ordersService.insert(model);
    }

    @PostMapping("change-status")
    @CrossOrigin(origins = "*")
    public Orders changeStatus(@RequestBody OrdersModel model) { return ordersService.changeStatus(model); }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Orders update(@RequestBody OrdersModel model) {return ordersService.update(model); }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.ordersService.deleteById(id);
    }
}
