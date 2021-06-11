package rs.ac.singidunum.candy_store_backend.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class OrdersModel {
    private String id;
    private String username;
    private String city;
    private String address;
    private String payment;
    private double price;
    private List<Object> items;
    private LocalDate orderedAt;
    private String status;
}
