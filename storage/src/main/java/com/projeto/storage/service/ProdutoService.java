package com.projeto.storage.service;

import java.lang.foreign.Linker.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projeto.storage.dto.ProdutoDto;
import com.projeto.storage.model.Produto;
import com.projeto.storage.repository.ProdutoRepository;
import com.projeto.storage.service.Exception.DatabaseException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProdutoService {
    
    @Autowired
    private ProdutoRepository repository;
    
    //find / find by id
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
        //Produto produto = p.get();
        Produto produto = p.orElseThrow(() -> new EntityNotFoundException("Não Encontrado"));
        return new ProdutoDto(produto);
    }

    @Transactional(readOnly = true)
    public List<ProdutoDto> findByNome(String nome){
        List<Produto> produtos = repository.findByNomeContainingIgnoreCase(nome);
        List<ProdutoDto> dto = new ArrayList<>();
        for(Produto p : produtos){
            dto.add(new ProdutoDto(p));
        }
        return dto;
    }

    //update
    @Transactional
    public ProdutoDto update(Long id, ProdutoDto dto){
        Produto entity = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Não encontrado"));
        entity.setNome(dto.getNome());
        entity.setQuantidade(dto.getQuantidade());
        entity.setValor(dto.getValor());
        repository.save(entity);
        return new ProdutoDto(entity);
    }

    //Insert
    @Transactional
    public ProdutoDto insert(ProdutoDto dto){
        Produto entity = new Produto();
        entity.setNome(dto.getNome());
        entity.setQuantidade(dto.getQuantidade());
        entity.setValor(dto.getValor());
        repository.save(entity);
        return new ProdutoDto(entity);
    }

    public void delete(Long id){
        try{
            repository.deleteById(id);
        }
        catch(Exception e){
            throw new DatabaseException("Integridade violada");
        }
    }
}
