CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
id INT NOT NULL IDENTITY(1, 1),
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(30) NOT NULL,
stock INTEGER(30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("TV", "Electronics", "200.00", "5" );

INSERT INTO products   (product_name, department_name, price, stock)
VALUES ("Lipstick", "Beauty", "25.00", "10" );

INSERT INTO products   (product_name, department_name, price, stock)
VALUES ("Toilet_Paper", "Home", "6.99", "100" );

INSERT INTO products   (product_name, department_name, price, stock)
VALUES ("Chromecast", "Electronics", "22.50", "8" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Macbook", "Electronics", "2999.00", "1" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Lotion", "Beauty", "15.99", "14" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Shelf", "Home", "37.64", "5" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Hoodie", "Apparel", "64.00", "10" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Vaccum", "Home", "999.99", "7" );

INSERT INTO products  (product_name, department_name, price, stock)
VALUES ("Cheeseboard", "Gifts", "18.50", "12" );