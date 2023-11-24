package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Responsavel;
import br.com.senai.sgate.repository.ResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/responsaveis")
public class ResponsavelController {

    @Autowired
    private ResponsavelRepository responsavelRepository;
    @GetMapping
    public List<Responsavel> listarResponsaveis() {
        return responsavelRepository.findAll();
    }
    @PostMapping
    public Responsavel criarResponsavel(@RequestBody Responsavel responsavel) {
        return responsavelRepository.save(responsavel);
    }
    @DeleteMapping("/{idResponsavel}")
    public ResponseEntity<String> deletarResponsavel(@PathVariable Long idResponsavel) {
        try {
            responsavelRepository.deleteById(idResponsavel);
            return ResponseEntity.ok("Responsavel deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idResponsavel}")
    public ResponseEntity<Responsavel> atualizarResponsavel(@PathVariable Long idResponsavel, @RequestBody Responsavel responsavelAtualizado) {
        if (responsavelRepository.existsById(idResponsavel)) {
            Responsavel responsavel = responsavelRepository.findById(idResponsavel).get();
            responsavel.setIdResponsavel(responsavelAtualizado.getIdResponsavel());
            responsavel.setEmail(responsavelAtualizado.getEmail());
            responsavel.setNome(responsavelAtualizado.getNome());
            responsavel.setTelefone(responsavelAtualizado.getTelefone());
            responsavel.setSenha(responsavelAtualizado.getSenha());
            Responsavel responsavelAtualizadoBD = responsavelRepository.save(responsavel);
            return ResponseEntity.ok(responsavelAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
