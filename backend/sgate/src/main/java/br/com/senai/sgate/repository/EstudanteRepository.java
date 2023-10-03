package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Estudante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EstudanteRepository extends JpaRepository<Estudante, Long> {
}
