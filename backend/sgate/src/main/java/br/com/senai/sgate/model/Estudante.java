package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Estudante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEstudante;
    private String email;
    private String nome;
    
    @ManyToOne
    private Turma turma;

}
