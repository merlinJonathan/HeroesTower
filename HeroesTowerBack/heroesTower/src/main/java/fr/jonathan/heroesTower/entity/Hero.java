package fr.jonathan.heroesTower.entity;

import javax.persistence.*;

@Entity
public class Hero {
    @Id
    @GeneratedValue
    private long id;
    
    @Column
    private String name;
    
    public Hero() {
        
    }

    public Hero(String name) {
        super();
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Hero [id=" + id + ", name=" + name + "]";
    }
    
}
