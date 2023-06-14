INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('12345678A', 'Pérez García', 'Calle Mayor 12', 'juan.perez@email.com', 'Juan', '123456789');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('23456789B', 'López González', 'Plaza del Sol 4', 'maria.lopez@email.com', 'María', '987654321');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('34567890C', 'Martínez Sánchez', 'Calle del Prado 3', 'pedro.martinez@email.com', 'Pedro', '555555555');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('45678901D', 'Fernández Pérez', 'Avenida de la Libertad 21', 'sara.fernandez@email.com', 'Sara', '666666666');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('56789012E', 'González López', 'Calle Mayor 23', 'ana.gonzalez@email.com', 'Ana', '777777777');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('67890123F', 'Hernández García', 'Plaza del Sol 10', 'luis.hernandez@email.com', 'Luis', '888888888');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('78901234G', 'Sánchez Martínez', 'Calle del Prado 5', 'ana.sanchez@email.com', 'Ana', '999999999');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('89012345H', 'García Fernández', 'Avenida de la Libertad 7', 'luis.garcia@email.com', 'Luis', '111111111');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('90123456I', 'Pérez Martínez', 'Calle Mayor 45', 'ana.perez@email.com', 'Ana', '222222222');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('01234567J', 'López Sánchez', 'Plaza del Sol 8', 'luis.lopez@email.com', 'Luis', '333333333');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('12345678K', 'Martínez García', 'Calle del Prado 2', 'ana.martinez@email.com', 'Ana', '444444444');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('00001111K', 'Gallego Espada', 'Calle Rapazalla 3', 'jose.gallego.admin@email.com', 'Jose', '123456787');
INSERT INTO lista_cargada (dni, apellidos, direccion, email, nombre, telefono) VALUES ('00022111M', 'Gallego Espada', 'Calle Rapazalla 3', 'rosario.gallego.management@email.com', 'Rosario', '223322112');

INSERT INTO socios_club (dni, apellidos, direccion, email, nombre, password, telefono) VALUES ('00001111K', 'Gallego Espada', 'Calle Rapazalla 3', 'jose.gallego.admin@email.com', 'Jose','$2a$10$JI275u90aIkO9hPREvsgB.Tb3/z7/v6ICi1kkHIYeFTcru4w/tj6u', '123456787');
INSERT INTO socios_club (dni, apellidos, direccion, email, nombre, password, telefono) VALUES ('00022111M', 'Gallego Espada', 'Calle Rapazalla 3', 'rosario.gallego.management@email.com', 'Rosario','$2a$10$zb4eIZYwd2dgkEgOymAICOMAWnsHS1KSxiH4hKaEtHzjvItbX.3/C', '223322112');

INSERT INTO roles (id, name) VALUES (1, 'ADMIN');
INSERT INTO roles (id, name) VALUES (2, 'MANAGEMENT');
INSERT INTO roles (id, name) VALUES (3, 'USER');

INSERT INTO users_roles (user_id, role_id) VALUES ('00001111K', 1);
INSERT INTO users_roles (user_id, role_id) VALUES ('00022111M', 2);