package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Responsavel;
import br.com.senai.sgate.repository.ResponsavelRepository;
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
public class AuthControllerResponsavel {
private final ResponsavelRepository responsavelRepository;
@Autowired
public AuthControllerResponsavel(ResponsavelRepository responsavelRepository) {
this.responsavelRepository = responsavelRepository;
}
@PostMapping("/loginresponsavel")
public Boolean login(@RequestBody Responsavel usuario) {
List<Responsavel> usuarios = responsavelRepository.findAll();
for (Responsavel p : usuarios) {
if (p.getEmail().equals(usuario.getEmail()) && p.getSenha().equals(usuario.getSenha())) {
return true;
}
}
return false;
}
}