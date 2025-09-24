# Client Management Application

This is a simple Angular project to manage clients and meetings. It has basic pages to add clients and schedule meetings.  
This project is a part of an assignment of SimpliLearn Java Full Stack Developer Course for learning All About Planning and Designing UI.

## This project uses

- HTML/CSS  
- JavaScript  
- Angular  
- MySQL  

## Prerequisites

Make sure you have Node.js and Angular CLI installed on your machine.

## How to run

1. Clone this repository.  
2. Run `npm install` to install all dependencies.  
3. Run `ng serve` to start the development server.  
4. Open your browser and go to `http://localhost:4200/`.  

## Setting up the Database

1. Open MySQL command line or Workbench.  
2. Run the database creation script at /sql/create_database.sql
3. Run the clients table creation script at /sql/create_clients_table.sql
4. Run the meetings table creation script at /sql/create_meetings_table.sql
5. Insert sample data using /sql/insert_sample_data.sql;
6. Verify the data in MySQL:  

USE client_management_db;
SELECT * FROM clients;
SELECT * FROM meetings;