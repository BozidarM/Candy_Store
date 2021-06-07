package rs.ac.singidunum.candy_store_backend.service;

public interface IAutoMapperService {
    <T> T map(Object model, Class<T> entity);
}
