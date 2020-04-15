package com.dbs.demo.model;


import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Metric {

    @Id
    private String pullutant_measure_standard;

    private String location;

    private String year;

    private String parameter_name;

    private String event_type;

    private String metric_used;

    private String method_name;

    private String units_of_measure;

    private String observation_count;

    private String observation_percent;

    private String completeness_indicator;

    private String valid_day_count;

    private String required_day_count;

    private String exceptional_data_count;

    private String null_data_count;

    private String certification_indicator;

    private String num_obs_below_mdl;

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

    public String getMetric_used() {
        return metric_used;
    }

    public void setMetric_used(String metric_used) {
        this.metric_used = metric_used;
    }

    public String getMethod_name() {
        return method_name;
    }

    public void setMethod_name(String method_name) {
        this.method_name = method_name;
    }

    public String getUnits_of_measure() {
        return units_of_measure;
    }

    public void setUnits_of_measure(String units_of_measure) {
        this.units_of_measure = units_of_measure;
    }

    public String getObservation_count() {
        return observation_count;
    }

    public void setObservation_count(String observation_count) {
        this.observation_count = observation_count;
    }

    public String getObservation_percent() {
        return observation_percent;
    }

    public void setObservation_percent(String observation_percent) {
        this.observation_percent = observation_percent;
    }

    public String getCompleteness_indicator() {
        return completeness_indicator;
    }

    public void setCompleteness_indicator(String completeness_indicator) {
        this.completeness_indicator = completeness_indicator;
    }

    public String getValid_day_count() {
        return valid_day_count;
    }

    public void setValid_day_count(String valid_day_count) {
        this.valid_day_count = valid_day_count;
    }

    public String getRequired_day_count() {
        return required_day_count;
    }

    public void setRequired_day_count(String required_day_count) {
        this.required_day_count = required_day_count;
    }

    public String getExceptional_data_count() {
        return exceptional_data_count;
    }

    public void setExceptional_data_count(String exceptional_data_count) {
        this.exceptional_data_count = exceptional_data_count;
    }

    public String getNull_data_count() {
        return null_data_count;
    }

    public void setNull_data_count(String null_data_count) {
        this.null_data_count = null_data_count;
    }

    public String getCertification_indicator() {
        return certification_indicator;
    }

    public void setCertification_indicator(String certification_indicator) {
        this.certification_indicator = certification_indicator;
    }

    public String getNum_obs_below_mdl() {
        return num_obs_below_mdl;
    }

    public void setNum_obs_below_mdl(String num_obs_below_mdl) {
        this.num_obs_below_mdl = num_obs_below_mdl;
    }
}
