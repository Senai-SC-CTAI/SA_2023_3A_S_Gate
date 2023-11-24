package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Portaria;
import br.com.senai.sgate.repository.PortariaRepository;
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
public class AuthControllerPortaria {
private final PortariaRepository portariaRepository;
@Autowired
public AuthControllerPortaria(PortariaRepository portariaRepository) {
this.portariaRepository = portariaRepository;
}
@PostMapping("/loginportaria")
public Boolean login(@RequestBody Portaria usuario) {
List<Portaria> usuarios = portariaRepository.findAll();
for (Portaria p : usuarios) {
if (p.getEmail().equals(usuario.getEmail()) && p.getSenha().equals(usuario.getSenha())) {
return true;
}
}
return false;
}
}