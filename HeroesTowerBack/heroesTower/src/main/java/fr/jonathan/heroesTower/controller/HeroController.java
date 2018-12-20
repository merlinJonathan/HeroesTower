package fr.jonathan.heroesTower.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.jonathan.heroesTower.entity.Hero;
import fr.jonathan.heroesTower.service.HeroService;

@RestController
@RequestMapping("/api/heroes")
public class HeroController {

    @Autowired
    HeroService heroService;
    
    @GetMapping("/")
    @CrossOrigin(origins = "*")
    public List<Hero> getAll()
    {
        return heroService.findAll();
    }
    
    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public Hero getById(@PathVariable long id)
    {
        return heroService.find(id);
    }
    
    @PostMapping("/")
    @CrossOrigin(origins = "*")
    public Hero addHero(@RequestBody Hero hero)
    {
        return heroService.insert(hero);
    }
    
    @PutMapping("/")
    @CrossOrigin(origins = "*")
    public Hero updateHero(@RequestBody Hero hero)
    {
        return heroService.update(hero);
    }
    
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*")
    public void DeleteHero(@PathVariable long id)
    {
        heroService.delete(id);
    }
}
