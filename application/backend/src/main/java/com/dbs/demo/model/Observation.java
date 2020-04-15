package com.dbs.demo.model;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Observation {
    @Id
    private String pullutant_measure_standard;

    private String location;

    private String year;

    private String parameter_name;

    private String event_type;

    private String first_max_value;

    private String first_max_datetime;

    private String second_max_value;

    private String second_max_datetime;

    private String third_max_value;

    private String third_max_datetime;

    private String fourth_max_value;

    private String fourth_max_datetime;

    private String first_max_non_overlapping_value;

    private String first_no_max_datetime;

    private String second_max_non_overlapping_value;

    private String second_no_max_datetime;

    private String ninety_nine_percentile;

    private String ninety_eight_percentile;

    private String ninety_five_percentile;

    private String ninety_percentile;

    private String seventy_five_percentile;

    private String fifty_percentile;

    private String ten_percentile;

    private String date_of_last_change;

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

    public String getFirst_max_value() {
        return first_max_value;
    }

    public void setFirst_max_value(String first_max_value) {
        this.first_max_value = first_max_value;
    }

    public String getFirst_max_datetime() {
        return first_max_datetime;
    }

    public void setFirst_max_datetime(String first_max_datetime) {
        this.first_max_datetime = first_max_datetime;
    }

    public String getSecond_max_value() {
        return second_max_value;
    }

    public void setSecond_max_value(String second_max_value) {
        this.second_max_value = second_max_value;
    }

    public String getSecond_max_datetime() {
        return second_max_datetime;
    }

    public void setSecond_max_datetime(String second_max_datetime) {
        this.second_max_datetime = second_max_datetime;
    }

    public String getThird_max_value() {
        return third_max_value;
    }

    public void setThird_max_value(String third_max_value) {
        this.third_max_value = third_max_value;
    }

    public String getThird_max_datetime() {
        return third_max_datetime;
    }

    public void setThird_max_datetime(String third_max_datetime) {
        this.third_max_datetime = third_max_datetime;
    }

    public String getFourth_max_value() {
        return fourth_max_value;
    }

    public void setFourth_max_value(String fourth_max_value) {
        this.fourth_max_value = fourth_max_value;
    }

    public String getFourth_max_datetime() {
        return fourth_max_datetime;
    }

    public void setFourth_max_datetime(String fourth_max_datetime) {
        this.fourth_max_datetime = fourth_max_datetime;
    }

    public String getFirst_max_non_overlapping_value() {
        return first_max_non_overlapping_value;
    }

    public void setFirst_max_non_overlapping_value(String first_max_non_overlapping_value) {
        this.first_max_non_overlapping_value = first_max_non_overlapping_value;
    }

    public String getFirst_no_max_datetime() {
        return first_no_max_datetime;
    }

    public void setFirst_no_max_datetime(String first_no_max_datetime) {
        this.first_no_max_datetime = first_no_max_datetime;
    }

    public String getSecond_max_non_overlapping_value() {
        return second_max_non_overlapping_value;
    }

    public void setSecond_max_non_overlapping_value(String second_max_non_overlapping_value) {
        this.second_max_non_overlapping_value = second_max_non_overlapping_value;
    }

    public String getSecond_no_max_datetime() {
        return second_no_max_datetime;
    }

    public void setSecond_no_max_datetime(String second_no_max_datetime) {
        this.second_no_max_datetime = second_no_max_datetime;
    }

    public String getNinety_nine_percentile() {
        return ninety_nine_percentile;
    }

    public void setNinety_nine_percentile(String ninety_nine_percentile) {
        this.ninety_nine_percentile = ninety_nine_percentile;
    }

    public String getNinety_eight_percentile() {
        return ninety_eight_percentile;
    }

    public void setNinety_eight_percentile(String ninety_eight_percentile) {
        this.ninety_eight_percentile = ninety_eight_percentile;
    }

    public String getNinety_five_percentile() {
        return ninety_five_percentile;
    }

    public void setNinety_five_percentile(String ninety_five_percentile) {
        this.ninety_five_percentile = ninety_five_percentile;
    }

    public String getNinety_percentile() {
        return ninety_percentile;
    }

    public void setNinety_percentile(String ninety_percentile) {
        this.ninety_percentile = ninety_percentile;
    }

    public String getSeventy_five_percentile() {
        return seventy_five_percentile;
    }

    public void setSeventy_five_percentile(String seventy_five_percentile) {
        this.seventy_five_percentile = seventy_five_percentile;
    }

    public String getFifty_percentile() {
        return fifty_percentile;
    }

    public void setFifty_percentile(String fifty_percentile) {
        this.fifty_percentile = fifty_percentile;
    }

    public String getTen_percentile() {
        return ten_percentile;
    }

    public void setTen_percentile(String ten_percentile) {
        this.ten_percentile = ten_percentile;
    }

    public String getDate_of_last_change() {
        return date_of_last_change;
    }

    public void setDate_of_last_change(String date_of_last_change) {
        this.date_of_last_change = date_of_last_change;
    }
}
