package com.projeto.storage.dto;

import com.projeto.storage.model.Produto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoDto {
    private long id;
    private String nome;
    private int quantidade;
    private float valor;

    public ProdutoDto(Produto produto){
        this.id = produto.getId();
        this.nome = produto.getNome();
        this.quantidade = produto.getQuantidade();
        this.valor = produto.getValor();
    }

}
