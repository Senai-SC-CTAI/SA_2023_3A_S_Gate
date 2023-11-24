package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Long> {
}
