package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Pedido;
import br.com.senai.sgate.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;
    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }
    @PostMapping
    public Pedido criarPedido(@RequestBody Pedido pedido) {
        return pedidoRepository.save(pedido);
    }
    @DeleteMapping("/{idPedido}")
    public ResponseEntity<String> deletarPedido(@PathVariable Long cod) {
        try {
            pedidoRepository.deleteById(cod);
            return ResponseEntity.ok("Pedido deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idPedido}")
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable Long idPedido, @RequestBody Pedido pedidoAtualizado) {
        if (pedidoRepository.existsById(idPedido)) {
            Pedido pedido = pedidoRepository.findById(idPedido).get();
            pedido.setIdPedido(pedidoAtualizado.getIdPedido());
            pedido.setHorario(pedidoAtualizado.getHorario());
            pedido.setData(pedidoAtualizado.getData());
            pedido.setStatus(pedidoAtualizado.getStatus());
            pedido.setProfessor(pedidoAtualizado.getProfessor());
            pedido.setEstudante(pedidoAtualizado.getEstudante());
            pedido.setCoordenacao(pedidoAtualizado.getCoordenacao());
            pedido.setResponsavel(pedidoAtualizado.getResponsavel());
            Pedido pedidoAtualizadoBD = pedidoRepository.save(pedido);
            return ResponseEntity.ok(pedidoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
