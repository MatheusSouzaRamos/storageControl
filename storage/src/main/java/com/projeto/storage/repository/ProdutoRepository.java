package com.projeto.storage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.storage.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
