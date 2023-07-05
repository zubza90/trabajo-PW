package cl.bencant.videojuegos.repository;

import cl.bencant.videojuegos.repository.model.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
}
