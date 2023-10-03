package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Senha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SenhaRepository extends JpaRepository<Senha, Long> {
}
