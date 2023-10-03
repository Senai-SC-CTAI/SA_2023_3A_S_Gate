package br.com.senai.sgate.repository;
import br.com.senai.sgate.model.Coordenacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CoordenacaoRepository extends JpaRepository<Coordenacao, Long> {
}
