-- In this file, write insert queries to populate the `burgers` table with at least three entries.
INSERT INTO burgers (burger_name) VALUES ("Burger a la Mode");
INSERT INTO burgers (burger_name) VALUES ("Romanes of the Day Burger");
INSERT INTO burgers (burger_name) VALUES ("Summer Thyme Burger");
INSERT INTO burgers (burger_name, devoured) VALUES ("Yes I Cayenne Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Sweet Home Avocado Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("The Troy Oinkman Burger", true);

SELECT * FROM burgers;

UPDATE burgers SET devoured = 1 WHERE id = 1;