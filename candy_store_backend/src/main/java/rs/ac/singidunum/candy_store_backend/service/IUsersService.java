package rs.ac.singidunum.candy_store_backend.service;

import rs.ac.singidunum.candy_store_backend.entity.Users;
import rs.ac.singidunum.candy_store_backend.model.UsersModel;

public interface IUsersService {
    Users insert(UsersModel model);
    Users login(UsersModel model);
    Users update(UsersModel model);
    Users findByUsername(String username);
}
