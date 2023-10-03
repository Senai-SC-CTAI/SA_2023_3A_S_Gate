package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long> {
}
