package rs.ac.singidunum.candy_store_backend.model;

import lombok.Data;

@Data
public class UsersModel {
    private String id;
    private String fullname;
    private String email;
    private String username;
    private String password;
    private String city;
    private String address;
    private String birthday;
}
