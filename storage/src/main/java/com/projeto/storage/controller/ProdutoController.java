package com.projeto.storage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.storage.dto.ProdutoDto;
import com.projeto.storage.model.Produto;
import com.projeto.storage.service.ProdutoService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping(value = "/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<ProdutoDto>> findAll(){
        List<ProdutoDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
    

}
