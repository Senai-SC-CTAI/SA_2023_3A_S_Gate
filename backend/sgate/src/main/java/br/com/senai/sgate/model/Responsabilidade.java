package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Responsabilidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idResponsabilidade;
    
    @ManyToOne
    private Estudante estudante;
    
    @ManyToOne
    private Responsavel responsavel;

}
