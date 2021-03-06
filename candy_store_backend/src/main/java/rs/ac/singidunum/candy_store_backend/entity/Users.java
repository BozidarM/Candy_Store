package rs.ac.singidunum.candy_store_backend.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Document(collection = "users")
public class Users {
    @Id
    private String id;
    @Field("fullname")
    private String fullname;
    @Field("email")
    private String email;
    @Field("useranme")
    private String username;
    @Field("password")
    private String password;
    @Field("city")
    private String city;
    @Field("address")
    private String address;
    @Field("birthday")
    private String birthday;
}
