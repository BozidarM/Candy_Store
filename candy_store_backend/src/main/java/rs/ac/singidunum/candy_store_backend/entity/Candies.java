package rs.ac.singidunum.candy_store_backend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "candies")
public class Candies {
    @Id
    private String id;
    @Field("name")
    private String name;
    @Field("category")
    private String category;
    @Field("price")
    private double price;
    @Field("description")
    private String description;
    @Field("image")
    private String image;
    @Field("stars")
    private List<Integer> stars;
    @Field("rating")
    private int rating;
    @Field("dateCreated")
    private LocalDate dateCreated;
    @Field("isActive")
    private String isActive;
    @Field("madeIn")
    private String madeIn;
    @Field("quantity")
    private int quantity;
    @Field("comments")
    private List<Object> comments;
}
