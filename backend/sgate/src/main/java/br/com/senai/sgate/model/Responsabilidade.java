package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Responsabilidade {
    @ManyToOne
    private Estudante estudante;
    
    @ManyToOne
    private Responsavel responsavel;

}
