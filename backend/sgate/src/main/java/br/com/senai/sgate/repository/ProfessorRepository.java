package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
