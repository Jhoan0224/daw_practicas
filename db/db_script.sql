create database express_daw;

use express_daw;

CREATE TABLE usuarios (
	id_usuario int auto_increment PRIMARY KEY,
	nombre VARCHAR(200),
	documento VARCHAR(50),
	carnet VARCHAR(50),
	email VARCHAR(250),
	contrasenia VARCHAR(50),
	bloqueado CHAR(1),
	ultimo_login TIMESTAMP,
	activo CHAR(1) DEFAULT 'A',
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);


INSERT INTO usuarios (nombre, documento, carnet, email, contrasenia, bloqueado, ultimo_login) 
VALUES ('Alejandro García', '10203040', 'C-001', 'alejandro.g@mail.com', 'Pass123*', 'N', CURRENT_TIMESTAMP);

INSERT INTO usuarios (nombre, documento, carnet, email, contrasenia, bloqueado, ultimo_login) 
VALUES ('Mariana López', '20304050', 'C-002', 'm.lopez@mail.com', 'M4riana_2024', 'N', NULL);

INSERT INTO usuarios (nombre, documento, carnet, email, contrasenia, bloqueado, ultimo_login) 
VALUES ('Carlos Ruiz', '30405060', 'C-003', 'cruiz88@mail.com', 'Secure!99', 'S', '2024-03-15 10:30:00');

INSERT INTO usuarios (nombre, documento, carnet, email, contrasenia, bloqueado, ultimo_login) 
VALUES ('Lucía Fernández', '40506070', 'C-004', 'lucia.f@mail.com', 'Lfer_2023', 'N', CURRENT_TIMESTAMP);

INSERT INTO usuarios (nombre, documento, carnet, email, contrasenia, bloqueado, ultimo_login) 
VALUES ('Roberto Gómez', '50607080', 'C-005', 'rgomez@mail.com', 'B0lt_456', 'N', '2024-03-19 14:20:00');
