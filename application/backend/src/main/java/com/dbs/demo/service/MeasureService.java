package com.dbs.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.demo.repository.MeasureRepository;

import java.util.List;

@Service
public class MeasureService {
    @Autowired
    private MeasureRepository measureRepository;

    public List<String> getParameterAvg(String p) {
        return measureRepository.getParameterAvg(p);
    }
}