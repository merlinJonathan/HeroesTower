package fr.jonathan.heroesTower.entity;

import javax.persistence.*;

@Entity
public class Test {

    @Id
    @GeneratedValue
    private long id;
    
    Test() {
       
    }
}
