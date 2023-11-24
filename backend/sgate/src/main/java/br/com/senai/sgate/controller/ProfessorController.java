package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Professor;
import br.com.senai.sgate.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/professores")
public class ProfessorController {

    @Autowired
    private ProfessorRepository professorRepository;
    @GetMapping
    public List<Professor> listarProfessors() {
        return professorRepository.findAll();
    }
    @PostMapping
    public Professor criarProfessor(@RequestBody Professor professor) {
        return professorRepository.save(professor);
    }
    @DeleteMapping("/{idProfessor}")
    public ResponseEntity<String> deletarProfessor(@PathVariable Long idProfessor) {
        try {
            professorRepository.deleteById(idProfessor);
            return ResponseEntity.ok("Professor deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idProfessor}")
    public ResponseEntity<Professor> atualizarProfessor(@PathVariable Long idProfessor, @RequestBody Professor professorAtualizado) {
        if (professorRepository.existsById(idProfessor)) {
            Professor professor = professorRepository.findById(idProfessor).get();
            professor.setIdProfessor(professorAtualizado.getIdProfessor());
            professor.setEmail(professorAtualizado.getEmail());
            professor.setNome(professorAtualizado.getNome());
            professor.setSenha(professorAtualizado.getSenha());
            Professor professorAtualizadoBD = professorRepository.save(professor);
            return ResponseEntity.ok(professorAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
