package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Ocorrencia;
import br.com.senai.sgate.repository.OcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/ocorrencias")
public class OcorrenciaController {

    @Autowired
    private OcorrenciaRepository ocorrenciaRepository;
    @GetMapping
    public List<Ocorrencia> listarOcorrencias() {
        return ocorrenciaRepository.findAll();
    }
    @PostMapping
    public Ocorrencia criarOcorrencia(@RequestBody Ocorrencia ocorrencia) {
        return ocorrenciaRepository.save(ocorrencia);
    }
    @DeleteMapping("/{idOcorrencia}")
    public ResponseEntity<String> deletarOcorrencia(@PathVariable Long cod) {
        try {
            ocorrenciaRepository.deleteById(cod);
            return ResponseEntity.ok("Ocorrencia deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{idOcorrencia}")
    public ResponseEntity<Ocorrencia> atualizarOcorrencia(@PathVariable Long idOcorrencia, @RequestBody Ocorrencia ocorrenciaAtualizado) {
        if (ocorrenciaRepository.existsById(idOcorrencia)) {
            Ocorrencia ocorrencia = ocorrenciaRepository.findById(idOcorrencia).get();
            ocorrencia.setIdOcorrencia(ocorrenciaAtualizado.getIdOcorrencia());
            ocorrencia.setHorario(ocorrenciaAtualizado.getHorario());
            ocorrencia.setData(ocorrenciaAtualizado.getData());
            ocorrencia.setEstudante(ocorrenciaAtualizado.getEstudante());
            ocorrencia.setPortaria(ocorrenciaAtualizado.getPortaria());
            Ocorrencia ocorrenciaAtualizadoBD = ocorrenciaRepository.save(ocorrencia);
            return ResponseEntity.ok(ocorrenciaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
