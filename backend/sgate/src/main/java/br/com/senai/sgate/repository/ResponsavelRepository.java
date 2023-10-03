package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Responsavel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ResponsavelRepository extends JpaRepository<Responsavel, Long> {
}
