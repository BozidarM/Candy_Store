package rs.ac.singidunum.candy_store_backend.service;


import rs.ac.singidunum.candy_store_backend.entity.Candies;
import rs.ac.singidunum.candy_store_backend.entity.Comments;
import rs.ac.singidunum.candy_store_backend.model.CommentsModel;

import java.util.List;

public interface ICommentsService {
    List<Comments> findAllByCandiesId(String candiesId);
    Comments insert(CommentsModel model);
    Comments update(CommentsModel model);
    void deleteById(String id);
}
