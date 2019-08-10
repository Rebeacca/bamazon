CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(30) NOT NULL,
stock_quantity INTEGER(30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", "200.00", "5" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Lipstick", "Beauty", "25.00", "10" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Toilet_Paper", "Home", "6.99", "100" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Chromecast", "Electronics", "22.50", "8" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", "2999.00", "1" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Lotion", "Beauty", "15.99", "14" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Shelf", "Home", "37.64", "5" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Hoodie", "Apparel", "64.00", "10" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Vaccum", "Home", "999.99", "7" );

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Cheeseboard", "Gifts", "18.50", "12" );