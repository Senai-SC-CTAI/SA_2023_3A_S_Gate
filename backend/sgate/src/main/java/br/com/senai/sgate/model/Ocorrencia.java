package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Ocorrencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOcorrencia;
    private String data;
    private String horario;
    
    @ManyToOne
    private Portaria portaria;
    
    @ManyToOne
    private Estudante estudante;
}
