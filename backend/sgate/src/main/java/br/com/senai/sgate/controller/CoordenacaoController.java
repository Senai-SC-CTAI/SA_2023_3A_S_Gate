package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Coordenacao;
import br.com.senai.sgate.repository.CoordenacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/coordenacao")
public class CoordenacaoController {

    @Autowired
    private CoordenacaoRepository coordenacaoRepository;
    @GetMapping
    public List<Coordenacao> listarCoordenacao() {
        return coordenacaoRepository.findAll();
    }
    @PostMapping
    public Coordenacao criarCoordenacao(@RequestBody Coordenacao coordenacao) {
        return coordenacaoRepository.save(coordenacao);
    }
    @DeleteMapping("/{idCoordenacao}")
    public ResponseEntity<String> deletarCoordenacao(@PathVariable Long cod) {
        try {
            coordenacaoRepository.deleteById(cod);
            return ResponseEntity.ok("Coordenacao deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idCoordenacao}")
    public ResponseEntity<Coordenacao> atualizarCoordenacao(@PathVariable Long idCoordenacao, @RequestBody Coordenacao coordenacaoAtualizado) {
        if (coordenacaoRepository.existsById(idCoordenacao)) {
            Coordenacao coordenacao = coordenacaoRepository.findById(idCoordenacao).get();
            coordenacao.setIdCoordenacao(coordenacaoAtualizado.getIdCoordenacao());
            coordenacao.setEmail(coordenacaoAtualizado.getEmail());
            coordenacao.setNome(coordenacaoAtualizado.getNome());
            coordenacao.setSenha(coordenacaoAtualizado.getSenha());
            Coordenacao coordenacaoAtualizadoBD = coordenacaoRepository.save(coordenacao);
            return ResponseEntity.ok(coordenacaoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
