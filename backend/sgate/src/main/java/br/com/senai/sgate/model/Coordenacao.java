package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Coordenacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCoordenacao;
    private String email;
    private String nome;
    private String senha;
}
