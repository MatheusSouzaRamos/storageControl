package com.projeto.storage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.storage.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
