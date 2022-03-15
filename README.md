# Employee Database CRUD
This is a simple CRUD app to show basic fullstack functionality using REACT and NODEJS
The option to update the salary for any employee is available.  One can also delete any employees.
The Show Employees button will show show the current employees in the database.

## Prerequisites
* This is on windows
* React - [official React website](https://reactjs.org/)
* NodeJS - [official Node.js website](https://nodejs.org/)
* mySQL - [official mySQL website](https://www.mysql.com/)



## INSTALLATION INSTRUCTIONS

Create database called ```employeesystem``` with the statement:
```
CREATE TABLE `employeesystem`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(255) NOT NULL,
  `age` INT NOT NULL,
  `home` TEXT(255) NOT NULL,
  `position` TEXT(255) NOT NULL,
  `wage` INT NOT NULL,
  PRIMARY KEY (`id`));
```

Start server from the ```/server/``` folder run ```node index.js```

Start frontend from the ```/client/``` folder run ```npm start```


## TESTING/DEBUGGING
To view the table, use the SQL statement:

```
SELECT * FROM employeesystem.employees;
```
