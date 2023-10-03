package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Portaria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PortariaRepository extends JpaRepository<Portaria, Long> {
}
