package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Responsabilidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ResponsabilidadeRepository extends JpaRepository<Responsabilidade, Long> {
}
