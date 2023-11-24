package br.com.senai.sgate.controller;
import br.com.senai.sgate.model.Coordenacao;
import br.com.senai.sgate.repository.CoordenacaoRepository;
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
public class AuthControllerCoord {
private final CoordenacaoRepository coordenacaoRepository;
@Autowired
public AuthControllerCoord(CoordenacaoRepository coordenacaoRepository) {
this.coordenacaoRepository = coordenacaoRepository;
}
@PostMapping("/logincoordenacao")
public Boolean login(@RequestBody Coordenacao usuario) {
List<Coordenacao> usuarios = coordenacaoRepository.findAll();
for (Coordenacao c : usuarios) {
if (c.getEmail().equals(usuario.getEmail()) && c.getSenha().equals(usuario.getSenha())) {
return true;
}
}
return false;
}
}