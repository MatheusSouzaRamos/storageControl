package com.projeto.storage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.storage.model.Produto;
import com.projeto.storage.repository.ProdutoRepository;

@Service
public class ProdutoService {
    
    @Autowired
    private ProdutoRepository repository;
    
    public List<Produto> findAll(){
        return repository.findAll();
    }
}
