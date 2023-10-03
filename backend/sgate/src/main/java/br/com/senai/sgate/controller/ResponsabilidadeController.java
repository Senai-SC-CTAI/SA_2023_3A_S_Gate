package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Responsabilidade;
import br.com.senai.sgate.repository.ResponsabilidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/responsabilidades")
public class ResponsabilidadeController {

    @Autowired
    private ResponsabilidadeRepository responsabilidadeRepository;
    @GetMapping
    public List<Responsabilidade> listarResponsabilidades() {
        return responsabilidadeRepository.findAll();
    }
    @PostMapping
    public Responsabilidade criarResponsabilidade(@RequestBody Responsabilidade responsabilidade) {
        return responsabilidadeRepository.save(responsabilidade);
    }
    @DeleteMapping("/{idResponsabilidade}")
    public ResponseEntity<String> deletarResponsabilidade(@PathVariable Long cod) {
        try {
            responsabilidadeRepository.deleteById(cod);
            return ResponseEntity.ok("Responsabilidade deletada com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idResponsabilidade}")
    public ResponseEntity<Responsabilidade> atualizarResponsabilidade(@PathVariable Long idResponsabilidade, @RequestBody Responsabilidade responsabilidadeAtualizado) {
        if (responsabilidadeRepository.existsById(idResponsabilidade)) {
            Responsabilidade responsabilidade = responsabilidadeRepository.findById(idResponsabilidade).get();
            responsabilidade.setEstudante(responsabilidadeAtualizado.getEstudante());
            responsabilidade.setResponsavel(responsabilidadeAtualizado.getResponsavel());
            Responsabilidade responsabilidadeAtualizadoBD = responsabilidadeRepository.save(responsabilidade);
            return ResponseEntity.ok(responsabilidadeAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
