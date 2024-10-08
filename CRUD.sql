create database	express;
USE express;
CREATE TABLE alumnos(
matricula INTEGER PRIMARY KEY auto_increment,
nombre VARCHAR(50) NOT NULL,
apellido_paterno VARCHAR(50) NOT NULL,
apellido_materno VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
telefono VARCHAR(50) UNIQUE NOT NULL,
genero CHAR(1) NOT NULL,
edad INTEGER NOT NULL,
fecha_nacimiento date NOT NULL,
graduado BOOLEAN NOT NULL
);