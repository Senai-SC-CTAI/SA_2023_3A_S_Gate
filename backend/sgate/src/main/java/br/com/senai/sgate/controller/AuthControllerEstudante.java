package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Estudante;
import br.com.senai.sgate.repository.EstudanteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
public class AuthControllerEstudante {
private final EstudanteRepository estudanteRepository;
@Autowired
public AuthControllerEstudante(EstudanteRepository estudanteRepository) {
this.estudanteRepository = estudanteRepository;
}
@PostMapping("/loginestudante")
public Boolean login(@RequestBody Estudante usuario) {
List<Estudante> usuarios = estudanteRepository.findAll();
for (Estudante a : usuarios) {
if (a.getEmail().equals(usuario.getEmail()) && a.getSenha().equals(usuario.getSenha())) {
return true;
}
}
return false;
}
}