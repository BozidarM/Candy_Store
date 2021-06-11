package rs.ac.singidunum.candy_store_backend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "orders")
public class Orders {
    @Id
    private String id;
    @Field("username")
    private String username;
    @Field("city")
    private String city;
    @Field("address")
    private String address;
    @Field("payment")
    private String payment;
    @Field("price")
    private double price;
    @Field("items")
    private List<Object> items;
    @Field("orderedAt")
    private LocalDate orderedAt;
    @Field("status")
    private String status;
}
