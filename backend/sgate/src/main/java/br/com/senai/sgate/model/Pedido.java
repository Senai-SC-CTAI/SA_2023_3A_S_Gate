package br.com.senai.sgate.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPedido;
    private String horario;
    private String data;
    private String status;
    
    @ManyToOne
    private Professor professor;
    
    @ManyToOne
    private Estudante estudante;
    
    @ManyToOne
    private Coordenacao coordenacao;
    
    @ManyToOne
    private Responsavel responsavel;

}
