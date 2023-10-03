package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Atraso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AtrasoRepository extends JpaRepository<Atraso, Long> {
}
