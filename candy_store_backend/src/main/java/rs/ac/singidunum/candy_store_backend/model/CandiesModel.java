package rs.ac.singidunum.candy_store_backend.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CandiesModel {
    private String id;
    private String name;
    private String category;
    private double price;
    private String description;
    private String image;
    private List<Integer> stars;
    private int rating;
    private LocalDate dateCreated;
    private String isActive;
    private String madeIn;
    private int quantity;
    private List<BackQuantityModel> listForCancelOrder;
}