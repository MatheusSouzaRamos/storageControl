package com.projeto.storage.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projeto.storage.dto.ProdutoDto;
import com.projeto.storage.model.Produto;
import com.projeto.storage.repository.ProdutoRepository;

@Service
public class ProdutoService {
    
    @Autowired
    private ProdutoRepository repository;
    
    @Transactional(readOnly = true)
    public List<ProdutoDto> findAll(){
        List<Produto> list = repository.findAll();
        List<ProdutoDto> listDto = new ArrayList<>();

        for(Produto p : list){
            listDto.add(new ProdutoDto(p));
        }
        return listDto;
    }

    @Transactional(readOnly = true)
    public ProdutoDto findById(Long id){
        Optional<Produto> p = repository.findById(id);
        Produto produto = p.get();
        return new ProdutoDto(produto);
    }
}
