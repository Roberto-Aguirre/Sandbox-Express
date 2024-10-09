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
graduado INTEGER NOT NULL
);

INSERT INTO alumnos (nombre,apellido_paterno,apellido_materno,email,telefono,genero,edad,fecha_nacimiento,graduado) VALUES ('Andres','Chavez','Valquez','andres@qa.com','8110630544','M',21,'2003-12-20',0);
## 0 Estudiante activo
## 1 Gradiado
## 2 Truncado