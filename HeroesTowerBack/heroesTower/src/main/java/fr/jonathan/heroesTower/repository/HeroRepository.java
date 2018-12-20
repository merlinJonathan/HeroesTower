package fr.jonathan.heroesTower.repository;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.jonathan.heroesTower.entity.Hero;

@Repository
@Transactional
public interface HeroRepository extends JpaRepository<Hero, Long>{

}
