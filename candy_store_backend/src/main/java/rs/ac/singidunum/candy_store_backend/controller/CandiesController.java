package rs.ac.singidunum.candy_store_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.candy_store_backend.entity.Candies;
import rs.ac.singidunum.candy_store_backend.model.BackQuantityModel;
import rs.ac.singidunum.candy_store_backend.model.CandiesModel;
import rs.ac.singidunum.candy_store_backend.service.CandiesService;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("candies")
public class CandiesController {

    @Autowired
    private CandiesService candiesService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Candies> findAll(){
        return candiesService.findAll();
    }

    @GetMapping("candy/{id}")
    @CrossOrigin(origins = "*")
    public Candies findCandiesById(@PathVariable("id") String id){
        return this.candiesService.findCandiesById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<Candies> findAllByName(@PathVariable("name") String name){
        return  candiesService.findAllByName(name);
    }

    @GetMapping("searchCategory/{category}")
    @CrossOrigin(origins = "*")
    public List<Candies> findAllByCategory(@PathVariable("category") String category){
        return  candiesService.findAllByCategory(category);
    }

    @GetMapping("searchDate/{date}")
    @CrossOrigin(origins = "*")
    public List<Candies> findAllByDate(@PathVariable("date") LocalDate date){
        return  candiesService.findAllByDate(date);
    }

    @GetMapping("searchRating/{rating}")
    @CrossOrigin(origins = "*")
    public List<Candies> findAllByCategory(@PathVariable("rating") int rating){
        return  candiesService.findAllByRating(rating);
    }

    @PostMapping("update-stars")
    @CrossOrigin(origins = "*")
    public Candies updateStars(@RequestBody CandiesModel model){
       return candiesService.updateStars(model);
    }

    @PostMapping("update-quantity")
    @CrossOrigin(origins = "*")
    public Candies updateQuantity(@RequestBody CandiesModel model) { return candiesService.updateQuantity(model); }

    @PostMapping("cart-delete-quantity")
    @CrossOrigin(origins = "*")
    public Candies cartDeleteQuantity(@RequestBody CandiesModel model) { return candiesService.cartDeleteQuantity(model); }

    @PostMapping("cancel-order-quantity")
    @CrossOrigin(origins = "*")
    public void updateQuantityAfterCancelOrder(@RequestBody List<BackQuantityModel> items){ this.candiesService.updateQuantityAfterCancelOrder(items);}

}
