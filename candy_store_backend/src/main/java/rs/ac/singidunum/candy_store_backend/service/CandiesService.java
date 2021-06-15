package rs.ac.singidunum.candy_store_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.candy_store_backend.entity.Candies;
import rs.ac.singidunum.candy_store_backend.model.BackQuantityModel;
import rs.ac.singidunum.candy_store_backend.model.CandiesModel;
import rs.ac.singidunum.candy_store_backend.repository.ICandiesRepository;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CandiesService implements ICandiesService {

    @Autowired
    private ICandiesRepository candiesRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Candies> findAll() { return candiesRepository.findAll();}

    @Override
    public Candies findCandiesById(String id){ return candiesRepository.findCandiesById(id);}

    @Override
    public List<Candies> findAllByName(String name){ return candiesRepository.findAllByName(name);}

    @Override
    public List<Candies> findAllByCategory(String category){ return candiesRepository.findAllByCategory(category);}

    @Override
    public List<Candies> findAllByDate(LocalDate date){ return candiesRepository.findAllByDate(date);}

    @Override
    public List<Candies> findAllByRating(int rating){ return candiesRepository.findAllByRating(rating);}

    @Override
    public Candies updateStars (CandiesModel model){
        Candies candy = candiesRepository.findCandiesById(model.getId());

        candy.getStars().add(model.getRating());

        this.candiesRepository.save(candy);

        double average = candy.getStars().stream().mapToInt(val -> val).average().orElse(0.0);
        int intValue = (int) average;

        candy.setRating(intValue);

        this.candiesRepository.save(candy);

        return autoMapperService.map(model, Candies.class);
    }

    @Override
    public Candies updateQuantity (CandiesModel model){
        Candies candy = candiesRepository.findCandiesById(model.getId());

        if (candy.getQuantity() < model.getQuantity()){

            return null;

        }else {
            candy.setQuantity(model.getQuantity());

            if (candy.getQuantity() == 0) {
                candy.setIsActive("No");
            }

            this.candiesRepository.save(candy);

            return autoMapperService.map(model, Candies.class);
        }
    }

    @Override
    public Candies cartDeleteQuantity (CandiesModel model){
        Candies candy = candiesRepository.findCandiesById(model.getId());

        int itemsInDb = candy.getQuantity();
        int itemsInModel = model.getQuantity();

        int totalQunatity = itemsInDb + itemsInModel;

        candy.setIsActive(model.getIsActive());
        candy.setQuantity(totalQunatity);

        this.candiesRepository.save(candy);

        return autoMapperService.map(model, Candies.class);
    }

    public void updateQuantityAfterCancelOrder(List<BackQuantityModel> items){

        for (BackQuantityModel item : items){

            Candies candy = candiesRepository.findCandiesById(item.getId());

            int itemsInDb = candy.getQuantity();
            int itemsInModel = item.getQuantity();

            int totalQunatity = itemsInDb + itemsInModel;

            candy.setIsActive("yes");
            candy.setQuantity(totalQunatity);

            this.candiesRepository.save(candy);
        }
    }
}
