package com.projeto.storage.service.Exception;

public class EntityNotFoundException extends RuntimeException {
    public EntityNotFoundException (String msg){
        super(msg);
    }
}
