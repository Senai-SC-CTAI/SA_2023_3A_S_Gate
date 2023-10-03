package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Portaria;
import br.com.senai.sgate.repository.PortariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/portaria")
public class PortariaController {

    @Autowired
    private PortariaRepository portariaRepository;
    @GetMapping
    public List<Portaria> listarPortaria() {
        return portariaRepository.findAll();
    }
    @PostMapping
    public Portaria criarPortaria(@RequestBody Portaria portaria) {
        return portariaRepository.save(portaria);
    }
    @DeleteMapping("/{idPortaria}")
    public ResponseEntity<String> deletarPortaria(@PathVariable Long cod) {
        try {
            portariaRepository.deleteById(cod);
            return ResponseEntity.ok("Portaria deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idPortaria}")
    public ResponseEntity<Portaria> atualizarPortaria(@PathVariable Long idPortaria, @RequestBody Portaria portariaAtualizado) {
        if (portariaRepository.existsById(idPortaria)) {
            Portaria portaria = portariaRepository.findById(idPortaria).get();
            portaria.setIdPortaria(portariaAtualizado.getIdPortaria());
            portaria.setEmail(portariaAtualizado.getEmail());
            portaria.setNome(portariaAtualizado.getNome());
            portaria.setSenha(portariaAtualizado.getSenha());
            Portaria portariaAtualizadoBD = portariaRepository.save(portaria);
            return ResponseEntity.ok(portariaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
