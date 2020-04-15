package com.dbs.demo.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Parameter {

    @Id
    private String parameter_name;

    private String parameter_code;

    public String getName() {
        return parameter_name;
    }

    public void setName(String name) {
        this.parameter_name = name;
    }

    public String getCode() {
        return parameter_code;
    }

    public void setCode(String code) {
        this.parameter_code = code;
    }



}

