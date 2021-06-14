package rs.ac.singidunum.candy_store_backend.service;

import rs.ac.singidunum.candy_store_backend.entity.Candies;
import rs.ac.singidunum.candy_store_backend.model.BackQuantityModel;
import rs.ac.singidunum.candy_store_backend.model.CandiesModel;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

public interface ICandiesService {
    List<Candies> findAll();
    Candies findCandiesById(String id);
    List<Candies> findAllByName(String name);
    List<Candies> findAllByCategory(String category);
    List<Candies> findAllByDate(LocalDate date);
    List<Candies> findAllByRating(int rating);
    Candies updateStars(CandiesModel model);
    Candies updateQuantity (CandiesModel model);
    Candies cartDeleteQuantity (CandiesModel model);
    void updateQuantityAfterCancelOrder(List<BackQuantityModel> items);
}
