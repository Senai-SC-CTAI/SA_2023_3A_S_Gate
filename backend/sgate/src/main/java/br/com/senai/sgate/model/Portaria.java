package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Portaria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPortaria;
    private String email;
    private String nome;
    
    @ManyToOne
    private Senha senha;
}
