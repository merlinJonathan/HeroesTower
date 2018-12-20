package fr.jonathan.heroesTower.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.jonathan.heroesTower.entity.Hero;
import fr.jonathan.heroesTower.repository.HeroRepository;

@Service
public class HeroService {
    @Autowired
    HeroRepository heroRepo;

    public List<Hero> findAll() {
        return heroRepo.findAll();
    }

    public Hero find(long id) {
        Optional<Hero> heroOption = heroRepo.findById(id);
        if(heroOption.isPresent())
        {
            return heroOption.get();
        }
        return null;
    }

    public Hero insert(Hero hero) {
       return heroRepo.save(hero);        
    }
    
    public Hero update(Hero hero) {
        return heroRepo.save(hero);
    }
    
    public void delete(long id) {
        heroRepo.deleteById(id);
    }

}
