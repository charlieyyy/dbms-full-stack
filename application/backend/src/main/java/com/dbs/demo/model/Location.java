package com.dbs.demo.model;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Location {
    @Id
    private String location;

    private String state_name;

    private String county_name;

    private String city_name;

    private String local_site_name;

    private String address;

    private String cbsa_name;

    private String latitude;

    private String longitude;

    private String datum;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getState_name() {
        return state_name;
    }

    public void setState_name(String state_name) {
        this.state_name = state_name;
    }

    public String getCounty_name() {
        return county_name;
    }

    public void setCounty_name(String county_name) {
        this.county_name = county_name;
    }

    public String getCity_name() {
        return city_name;
    }

    public void setCity_name(String city_name) {
        this.city_name = city_name;
    }

    public String getLocal_site_name() {
        return local_site_name;
    }

    public void setLocal_site_name(String local_site_name) {
        this.local_site_name = local_site_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCbsa_name() {
        return cbsa_name;
    }

    public void setCbsa_name(String cbsa_name) {
        this.cbsa_name = cbsa_name;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }
}
