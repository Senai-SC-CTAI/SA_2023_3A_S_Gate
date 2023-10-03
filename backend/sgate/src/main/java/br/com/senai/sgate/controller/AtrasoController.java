package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Atraso;
import br.com.senai.sgate.repository.AtrasoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/atrasos")
public class AtrasoController {

    @Autowired
    private AtrasoRepository atrasoRepository;
    @GetMapping
    public List<Atraso> listarAtrasos() {
        return atrasoRepository.findAll();
    }
    @PostMapping
    public Atraso criarAtraso(@RequestBody Atraso atraso) {
        return atrasoRepository.save(atraso);
    }
    @DeleteMapping("/{idAtraso}")
    public ResponseEntity<String> deletarAtraso(@PathVariable Long cod) {
        try {
            atrasoRepository.deleteById(cod);
            return ResponseEntity.ok("Atraso deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idAtraso}")
    public ResponseEntity<Atraso> atualizarAtraso(@PathVariable Long idAtraso, @RequestBody Atraso atrasoAtualizado) {
        if (atrasoRepository.existsById(idAtraso)) {
            Atraso atraso = atrasoRepository.findById(idAtraso).get();
            atraso.setIdAtraso(atrasoAtualizado.getIdAtraso());
            atraso.setHorario(atrasoAtualizado.getHorario());
            atraso.setData(atrasoAtualizado.getData());
            atraso.setEstudante(atrasoAtualizado.getEstudante());
            atraso.setPortaria(atrasoAtualizado.getPortaria());
            Atraso atrasoAtualizadoBD = atrasoRepository.save(atraso);
            return ResponseEntity.ok(atrasoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
