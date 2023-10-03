package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Turma;
import br.com.senai.sgate.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/turmas")
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;
    @GetMapping
    public List<Turma> listarTurmas() {
        return turmaRepository.findAll();
    }
    @PostMapping
    public Turma criarTurma(@RequestBody Turma turma) {
        return turmaRepository.save(turma);
    }
    @DeleteMapping("/{idTurma}")
    public ResponseEntity<String> deletarTurma(@PathVariable Long cod) {
        try {
            turmaRepository.deleteById(cod);
            return ResponseEntity.ok("Turma deletada com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idTurma}")
    public ResponseEntity<Turma> atualizarTurma(@PathVariable Long idTurma, @RequestBody Turma turmaAtualizado) {
        if (turmaRepository.existsById(idTurma)) {
            Turma turma = turmaRepository.findById(idTurma).get();
            turma.setIdTurma(turmaAtualizado.getIdTurma());
            turma.setNome(turmaAtualizado.getNome());
            turma.setCurso(turmaAtualizado.getCurso());
            Turma turmaAtualizadoBD = turmaRepository.save(turma);
            return ResponseEntity.ok(turmaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
