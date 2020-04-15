package com.dbs.demo.model;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Measure {

    @Id
    private String pullutant_measure_standard;

    private String location;

    private String year;

    private String parameter_name;

    private String event_type;

    private String arithmetic_mean;

    private String arithmetic_standard_dev;


    public String getPullutant_measure_standard() {
        return pullutant_measure_standard;
    }

    public void setPullutant_measure_standard(String pullutant_measure_standard) {
        this.pullutant_measure_standard = pullutant_measure_standard;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getParameter_name() {
        return parameter_name;
    }

    public void setParameter_name(String parameter_name) {
        this.parameter_name = parameter_name;
    }

    public String getEvent_type() {
        return event_type;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }

    public String getArithmetic_mean() {
        return arithmetic_mean;
    }

    public void setArithmetic_mean(String arithmetic_mean) {
        this.arithmetic_mean = arithmetic_mean;
    }

    public String getArithmetic_standard_dev() {
        return arithmetic_standard_dev;
    }

    public void setArithmetic_standard_dev(String arithmetic_standard_dev) {
        this.arithmetic_standard_dev = arithmetic_standard_dev;
    }

}
