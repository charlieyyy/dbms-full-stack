-- Qianyi Sun and Mingli Yang
-- Project 2


-- If you cannot run my codes due to the error 1366, pleasde run the two code lines below first.
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET SESSION sql_mode = 'NO_ENGINE_SUBSTITUTION';

-- Create database
DROP DATABASE if exists air;
CREATE DATABASE air;


-- Create mega_air table( Big table including all attributes)
USE air;
DROP TABLE if exists mega_air;
CREATE TABLE mega_air
(   
	location        VARCHAR(50),
	state_code		CHAR(50),
    county_code 	CHAR(50),
	site_num		CHAR(50),
    parameter_code	VARCHAR(50),
	pullutant_measure_standard VARCHAR(50),
    poc				VARCHAR(50),
    latitude		VARCHAR(50),
    longitude		VARCHAR(50),
    datum			CHAR(5),
    parameter_name  CHAR(50),
    sample_duration VARCHAR(1000),
    pollutant_standard CHAR(50),
    metric_used			VARCHAR(1000),
	method_name 		VARCHAR(1000),
	year                    VARCHAR(10),         
	units_of_measure            CHAR(50),     
	event_type                     CHAR(50),
	observation_count             VARCHAR(50),   
	observation_percent             VARCHAR(50),
	completeness_indicator          VARCHAR(50),
	valid_day_count                VARCHAR(50),
	required_day_count               VARCHAR(50),
	exceptional_data_count          VARCHAR(50),
	null_data_count                  VARCHAR(50),
	primary_exceedance_count       VARCHAR(50),
	secondary_exceedance_count       VARCHAR(50),
	certification_indicator         CHAR(50),
	num_obs_below_mdl               VARCHAR(50),
	arithmetic_mean                VARCHAR(50) NOT NULL,
	arithmetic_standard_dev          VARCHAR(50) NOT NULL,
	first_max_value                 VARCHAR(50),
	first_max_datetime               VARCHAR(50),
	second_max_value               VARCHAR(50),
	second_max_datetime              VARCHAR(50),
	third_max_value                VARCHAR(50),
	third_max_datetime              VARCHAR(50),
	fourth_max_value                VARCHAR(50),
	fourth_max_datetime              VARCHAR(50),
	first_max_non_overlapping_value  VARCHAR(50),
	first_no_max_datetime          VARCHAR(50),
	second_max_non_overlapping_value VARCHAR(50),
	second_no_max_datetime           VARCHAR(50),
	ninety_nine_percentile         VARCHAR(50),
	ninety_eight_percentile          VARCHAR(50),
	ninety_five_percentile          VARCHAR(50),
	ninety_percentile                VARCHAR(50),
	seventy_five_percentile        VARCHAR(50),
	fifty_percentile                 VARCHAR(50),
	ten_percentile                  VARCHAR(50),
	local_site_name                 VARCHAR(1000),
	address                        VARCHAR(1000),
	state_name                       char(50),
	county_name                     char(50),
	city_name                       char(50),
	cbsa_name                       char(50),
	date_of_last_change				VARCHAR(50)

);

-- Get data from raw csv file
-- Need to revise the address if you want to load the dataset
-- I cannot just give your website address to load the data because we do some data maniputation on the dataset we load
-- Thus I uploaded the dataset. You can revise the computer address below on your computer to load the dataset. Thank you.
LOAD DATA INFILE '/Users/xiaopaoshangtiantang/Desktop/SQL/project\ 2/final_dataset_2.csv' 
INTO TABLE mega_air 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n';

-- Delete the first line from raw dataset
DELETE  FROM  mega_air
WHERE location =  'location';


-- The code steps are to decompose the big table into smaller tables according to 3NF.

USE air;
-- Creat Parameter_Category_info table
DROP TABLE IF EXISTS Parameter_Category_info;
CREATE TABLE Parameter_Category_info(
	parameter_name VARCHAR(50)  PRIMARY KEY,
	parameter_code INT 
);

-- Insert the relative data into Parameter_Category_info table
INSERT INTO Parameter_Category_info
SELECT DISTINCT parameter_name, parameter_code
FROM mega_air;

-- Creat Location_Info table
DROP TABLE IF EXISTS Location_Info;
CREATE TABLE Location_Info(
location VARCHAR(50),
state_name VARCHAR(500),
county_name VARCHAR(500),
city_name VARCHAR(50),
local_site_name VARCHAR(500),
address VARCHAR(500),
cbsa_name VARCHAR(500),
latitude decimal(9,6),
longitude decimal(9,6),
datum VARCHAR(50),
CONSTRAINT Location_Info_pid
	PRIMARY KEY(location)
);

-- Insert the relative data into Location_Info table
INSERT INTO Location_Info
SELECT DISTINCT location,local_site_name,
address,state_name,county_name,city_name,cbsa_name,longitude,latitude,datum
FROM mega_air;

-- Creat Pollutant_measure_result table
DROP TABLE IF EXISTS Pollutant_measure_result;
CREATE TABLE Pollutant_measure_result(
pullutant_measure_standard VARCHAR(50),
location VARCHAR(50),
year year,
parameter_name VARCHAR(50),
event_type VARCHAR(50),
arithmetic_mean decimal(12,7),
arithmetic_standard_dev decimal(12,7),
CONSTRAINT Pollutant_measure_result_pid
	PRIMARY KEY(pullutant_measure_standard,year,parameter_name,location,event_type),
CONSTRAINT Pollutant_measure_result_pid1
	FOREIGN KEY (location)
	REFERENCES Location_Info (location),
CONSTRAINT  Pollutant_measure_result_pid2  
	FOREIGN KEY (parameter_name)
	REFERENCES Parameter_Category_info(parameter_name)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);
-- Insert the relative data into Pollutant_measure_result table
INSERT INTO Pollutant_measure_result
SELECT DISTINCT pullutant_measure_standard,location,year,parameter_name,event_type,arithmetic_mean,arithmetic_standard_dev
FROM mega_air;

-- Creat Special_value_observation_info table
DROP TABLE IF EXISTS Special_value_observation_info;
CREATE TABLE Special_value_observation_info(
pullutant_measure_standard VARCHAR(50),
location VARCHAR(50),
year YEAR,
parameter_name VARCHAR(50),
event_type VARCHAR(50),
first_max_value decimal(9,6),
first_max_datetime DATETIME,
second_max_value decimal(9,6),
second_max_datetime DATETIME,
third_max_value decimal(9,6),
third_max_datetime DATETIME,
fourth_max_value decimal(9,6),
fourth_max_datetime DATETIME,
first_max_non_overlapping_value decimal(9,6),
first_no_max_datetime DATETIME,
second_max_non_overlapping_value decimal(9,6),
second_no_max_datetime DATETIME,
ninety_nine_percentile decimal(7,4),
ninety_eight_percentile decimal(7,4),
ninety_five_percentile decimal(7,4),
ninety_percentile decimal(7,4),
seventy_five_percentile decimal(7,4),
fifty_percentile decimal(7,4),
ten_percentile decimal(7,4),
date_of_last_change DATE,
CONSTRAINT Special_value_observation_info_pid
	PRIMARY KEY(pullutant_measure_standard,year,parameter_name,location,event_type),
CONSTRAINT Special_value_observation_info_pid1
	FOREIGN KEY (location)
	REFERENCES Location_Info (location),
CONSTRAINT  Special_value_observation_info_pid2  
	FOREIGN KEY (parameter_name)
	REFERENCES Parameter_Category_info(parameter_name)
);

-- Insert the relative data into Special_value_observation_info table
INSERT INTO Special_value_observation_info
SELECT DISTINCT pullutant_measure_standard,location,year,parameter_name,event_type,first_max_value ,
first_max_datetime,second_max_value,second_max_datetime,third_max_value,third_max_datetime ,fourth_max_value ,fourth_max_datetime ,
first_max_non_overlapping_value ,first_no_max_datetime ,second_max_non_overlapping_value ,second_no_max_datetime ,
ninety_nine_percentile ,ninety_eight_percentile ,ninety_five_percentile ,ninety_percentile ,seventy_five_percentile ,
fifty_percentile ,ten_percentile, date_of_last_change
FROM mega_air;


-- Creat Measure_standard table
DROP TABLE IF EXISTS Measure_standard;
CREATE TABLE Measure_standard(
pullutant_measure_standard VARCHAR(50),
location VARCHAR(50),
year INT(4),
parameter_name VARCHAR(50),
event_type VARCHAR(50),
metric_used VARCHAR(500),
method_name VARCHAR(500),
units_of_measure VARCHAR(500),
observation_count INT(8),
observation_percent INT(8),
completeness_indicator VARCHAR(500),
valid_day_count INT(8),
required_day_count INT(8),
exceptional_data_count INT(8),
null_data_count INT(8),
certification_indicator VARCHAR(500),
num_obs_below_mdl INT(8),
CONSTRAINT Measure_standard_pid
	PRIMARY KEY(pullutant_measure_standard,year,parameter_name,location,event_type),
CONSTRAINT Measure_standard_pid1
	FOREIGN KEY (location)
	REFERENCES Location_Info (location),
CONSTRAINT  Measure_standard_pid2  
	FOREIGN KEY (parameter_name)
	REFERENCES Parameter_Category_info(parameter_name)
);
-- Insert the relative data into Measure_standard table
INSERT INTO Measure_standard
SELECT DISTINCT pullutant_measure_standard,location,year,parameter_name,event_type,
metric_used,method_name,units_of_measure,observation_count,observation_percent,
completeness_indicator,valid_day_count,required_day_count,exceptional_data_count,null_data_count,
certification_indicator,num_obs_below_mdl
FROM mega_air;




-- Store precedure 1: input the pollutant parameter name, it can help us output of each year pollutant average value
DROP PROCEDURE IF EXISTS Stored_precedure_1;  
DELIMITER //
CREATE  procedure Stored_precedure_1(input_parameter_name VARCHAR(50))
BEGIN
	select year,avg(arithmetic_mean) AS mean_pollutant_value
	from Pollutant_measure_result
	where parameter_name = input_parameter_name 
	group by year;
END //
DELIMITER ;
-- test Store precedure 1
call Stored_precedure_1('Ozone'); 
call Stored_precedure_1('PM2.5 - Local Conditions'); 

-- Store precedure 2:input the location info, it can help us output of each year pollutant average value in this area
DROP PROCEDURE IF EXISTS Stored_precedure_2;  
DELIMITER //
CREATE  procedure Stored_precedure_2(input_location VARCHAR(50))
BEGIN
	select year,avg(arithmetic_mean) AS mean_pollutant_value,location,parameter_name
	from Pollutant_measure_result
	where location = input_location
	group by year,parameter_name;
END //
DELIMITER ;
-- test Store precedure 2
call Stored_precedure_2('01-073-0028'); 



-- View 1: top 10 location has max PM 2.5 value in five year
DROP VIEW IF EXISTS most_severe_PM_location;

CREATE VIEW most_severe_PM_location  AS
	select avg(arithmetic_mean) AS five_year_PM_value,location
	from Pollutant_measure_result
	where parameter_name = 'PM2.5 - Local Conditions' 
	group by location
	order by avg(arithmetic_mean) DESC
	limit 10;
-- view 1: most_severe_PM_location(test case)
SELECT * FROM most_severe_PM_location;

-- View 2: top 10 location has max Ozone value in five year
DROP VIEW IF EXISTS most_severe_Ozone_location;

CREATE VIEW most_severe_Ozone_location  AS
	select avg(arithmetic_mean) AS five_year_Ozone_value,location
	from Pollutant_measure_result
	where parameter_name = 'Ozone' 
	group by location
	order by avg(arithmetic_mean) DESC
	limit 10;
-- view 2: most_severe_Ozone_location(test case)
SELECT * FROM most_severe_Ozone_location;


-- Trigger 1:check if input the right longitude and latitude information Trigger
DROP TRIGGER IF EXISTS location_before_update;
DELIMITER //
CREATE TRIGGER location_before_update
  BEFORE UPDATE ON Location_Info
  FOR EACH ROW
BEGIN
IF NEW.latitude > 90 THEN
	SIGNAL SQLSTATE 'HY000'
    SET MESSAGE_TEXT = 'latitude cannot more than or equal to 90';
ELSEIF NEW.latitude < -90 THEN
	SIGNAL SQLSTATE 'HY000'
    SET MESSAGE_TEXT = 'latitude cannot smaller than or equal to -90';
ELSEIF NEW.longitude >180 THEN
	SIGNAL SQLSTATE 'HY000'
    SET MESSAGE_TEXT = 'longitude cannot more than or equal to 180';
ELSEIF NEW.longitude <-180 THEN
	SIGNAL SQLSTATE 'HY000'
    SET MESSAGE_TEXT = 'longitude cannot smaller than or equal to -180';
END IF;
END//
DELIMITER ;

-- View the location '01-003-0010' information first
SELECT *
FROM Location_info
WHERE location = '01-003-0010';

/* If we want to check if the Trigger can raise, we can run the code below:
-- test location_before_update Trigger(we can receive the error message:
-- 'latitude cannot more than or equal to 90')
UPDATE Location_info
SET latitude = 91
WHERE location = '01-003-0010';

-- test location_before_update Trigger(we can receive the error message:
-- 'latitude cannot smaller than or equal to -90')
UPDATE Location_info
SET latitude = -91
WHERE location = '01-003-0010';

-- test location_before_update Trigger(we can receive the error message:
-- 'longitude cannot more than or equal to 180')
UPDATE Location_info
SET longitude = 182
WHERE location = '01-003-0010';

-- test location_before_update Trigger(we can receive the error message:
-- 'longitude cannot more than or equal to 180')
UPDATE Location_info
SET longitude = -182
WHERE location = '01-003-0010';*/

-- Trigger 2:check if input year belongs value which is between 2012 and 2016
DROP TRIGGER IF EXISTS Measure_standard_before_update;
DELIMITER //
CREATE TRIGGER Measure_standard_before_update
  BEFORE UPDATE ON Measure_standard
  FOR EACH ROW
BEGIN
IF NEW.year >= 2012|NEW.year<=2016 THEN
	SIGNAL SQLSTATE 'HY000'
    SET MESSAGE_TEXT = 'Please input the right year';
END IF;
END//
DELIMITER ;
-- test Measure_standard_before_update Trigger(we can receive the error message:'Please input the right year')
/*UPDATE Measure_standard
SET year = 2010
WHERE location = '01-003-0010'*/
