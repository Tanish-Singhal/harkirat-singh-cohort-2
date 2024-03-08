// Relationship in SQL
// Since SQL can not store objects, like there is a address column and inside it there are bunch of other columns telling the details of the address
// So we need to define two different tables to store the data

// So relationship between the table help us to link the tables

import { Client } from 'pg';

function userWithAddress() {
  
}

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  street VARCHAR(255) NOT NULL,
  pincode VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



// To insert the address of a user
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');

// if you want to get the address of a user
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
