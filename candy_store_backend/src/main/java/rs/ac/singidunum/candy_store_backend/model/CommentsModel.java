package rs.ac.singidunum.candy_store_backend.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CommentsModel {
    private String id;
    private String candiesId;
    private String username;
    private String content;
    private LocalDate postedAt;

}
