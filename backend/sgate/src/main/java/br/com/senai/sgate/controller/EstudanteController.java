package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Estudante;
import br.com.senai.sgate.repository.EstudanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/estudantes")
public class EstudanteController {

    @Autowired
    private EstudanteRepository estudanteRepository;
    @GetMapping
    public List<Estudante> listarEstudantes() {
        return estudanteRepository.findAll();
    }
    @PostMapping
    public Estudante criarEstudante(@RequestBody Estudante estudante) {
        return estudanteRepository.save(estudante);
    }
    @DeleteMapping("/{idEstudante}")
    public ResponseEntity<String> deletarEstudante(@PathVariable Long idEstudante) {
        try {
            estudanteRepository.deleteById(idEstudante);
            return ResponseEntity.ok("Estudante deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idEstudante}")
    public ResponseEntity<Estudante> atualizarEstudante(@PathVariable Long idEstudante, @RequestBody Estudante estudanteAtualizado) {
        if (estudanteRepository.existsById(idEstudante)) {
            Estudante estudante = estudanteRepository.findById(idEstudante).get();
            estudante.setIdEstudante(estudanteAtualizado.getIdEstudante());
            estudante.setEmail(estudanteAtualizado.getEmail());
            estudante.setNome(estudanteAtualizado.getNome());
            estudante.setTurma(estudanteAtualizado.getTurma());
            estudante.setSenha(estudanteAtualizado.getSenha());
            Estudante estudanteAtualizadoBD = estudanteRepository.save(estudante);
            return ResponseEntity.ok(estudanteAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
