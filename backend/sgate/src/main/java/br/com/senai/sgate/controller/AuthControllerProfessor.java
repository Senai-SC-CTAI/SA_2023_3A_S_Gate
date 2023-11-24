package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Professor;
import br.com.senai.sgate.repository.ProfessorRepository;
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
public class AuthControllerProfessor {
private final ProfessorRepository professorRepository;
@Autowired
public AuthControllerProfessor(ProfessorRepository professorRepository) {
this.professorRepository = professorRepository;
}
@PostMapping("/loginprofessor")
public Boolean login(@RequestBody Professor usuario) {
List<Professor> usuarios = professorRepository.findAll();
for (Professor p : usuarios) {
if (p.getEmail().equals(usuario.getEmail()) && p.getSenha().equals(usuario.getSenha())) {
return true;
}
}
return false;
}
}