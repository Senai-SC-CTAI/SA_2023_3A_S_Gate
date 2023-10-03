package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Senha;
import br.com.senai.sgate.repository.SenhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/senhas")
public class SenhaController {

    @Autowired
    private SenhaRepository senhaRepository;
    @GetMapping
    public List<Senha> listarSenhas() {
        return senhaRepository.findAll();
    }
    @PostMapping
    public Senha criarSenha(@RequestBody Senha senha) {
        return senhaRepository.save(senha);
    }
    @DeleteMapping("/{idSenha}")
    public ResponseEntity<String> deletarSenha(@PathVariable Long cod) {
        try {
            senhaRepository.deleteById(cod);
            return ResponseEntity.ok("Senha deletada com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idSenha}")
    public ResponseEntity<Senha> atualizarSenha(@PathVariable Long idSenha, @RequestBody Senha senhaAtualizado) {
        if (senhaRepository.existsById(idSenha)) {
            Senha senha = senhaRepository.findById(idSenha).get();
            senha.setIdSenha(senhaAtualizado.getIdSenha());
            senha.setHash(senhaAtualizado.getHash());
            senha.setSal(senhaAtualizado.getSal());
            Senha senhaAtualizadoBD = senhaRepository.save(senha);
            return ResponseEntity.ok(senhaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
