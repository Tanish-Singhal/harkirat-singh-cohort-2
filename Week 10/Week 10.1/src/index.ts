import { Client } from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// TODO: creating a Table
async function createUsersTable() {
  try {
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log("Table created successfully:", result);

  } catch(error) {
    console.error("Error while creating Table: ", error);
  }
}

// Foreign Key
async function createAddressesTable() {
  try {
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `)

    console.log("Table created successfully:", result);

  } catch(error) {
    console.error("Error while creating Table: ", error);
  }
}


// TODO: inserting data in the Table
async function insertUsersData(username: string, email: string) {
  try {
    const query = `
      INSERT INTO users (username, email) 
      VALUES ($1, $2)
    `;
    const values = [username, email];
    const res = await client.query(query, values);

    console.log("Inserting data successfull", res);
  
  } catch(error) {
    console.error("Error while adding data", error);
  }
}

async function insertAddressesData(user_id: number, city: string, country: string) {
  try {
    const query = `
      INSERT INTO addresses (user_id, city, country) 
      VALUES ($1, $2, $3)
    `;
    const values = [user_id, city, country];
    const res = await client.query(query, values);
    
    console.log("Inserting data successful", res);

  } catch(error) {
    console.error("Error while adding data", error);
  }
}


// TODO: Update data
async function updateUser(username: string, email: string, userId: number) {
  try {
    const query = `
      UPDATE users
      SET username = $1, email = $2
      WHERE id = $3
    `;
    const values = [username, email, userId];
    const res = await client.query(query, values);

    console.log("Updating user data successful", res);

  } catch(error) {
    console.error("Error while updating user data", error);
  }
}


// TODO: Delete the data
async function deleteUser(userId: number) {
  try {
    const query = `
      DELETE FROM users
      WHERE id = $1
    `;
    const values = [userId];
    const res = await client.query(query, values);

    console.log("Deleting user successful", res);

  } catch(error) {
    console.error("Error while deleting user", error);
  }
}


// TODO: Fetching data from Table
async function fetchingUsersData(email: string) {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found: ", result.rows[0]);
      return result.rows[0];
    }
    else {
      console.log("No user found with the given email");
      return null;
    }

  } catch(error) {
    console.error("Error while fetching the data ", error);
  }
}


// TODO: Trasactions
// when you want to run multiple queries such that all of them run or none of them do.
async function insertUserAndAddress(username: string, email: string, city: string, country: string) {
  try {
    // starting of the transaction
    await client.query('BEGIN');

    const insertUserText = `
      INSERT INTO users (username, email)
      VALUES ($1, $2)
    `;
    const usersValues = [username, email];
    const usersResult = await client.query(insertUserText, usersValues);

    const insertAddressText  = `
      INSERT INTO users (username, email)
      VALUES ($1, $2)
    `;
    const addressValues = [city, country];
    const addressResult = await client.query(insertAddressText, addressValues);

    await client.query('COMMIT');

    console.log("Users and Address inserted", usersResult, addressResult);

  } catch(error) {
    await client.query('ROLLBACK');     // Roll back the transaction on error
    console.log("Error while inserting the data", error);
  }
}


// TODO: Joins
async function fetchingFullDetails(userId: number) {
  try {
    const query = `
      SELECT u.id, u.username, u.email, a.city, a.country
      FROM users u
      JOIN addresses a ON u.id = a.user_id
      WHERE u.id = $1
    `;
    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
      console.log('User and address found:', result.rows[0]);
      return result.rows[0];
    } else {
      console.log('No user or address found with the given ID.');
      return null;
    }

  } catch(error) {
    console.error("Error while fetching the data ", error);
  }
}

// INNER JOIN => JOIN and INNER JOIN are same
// LEFT JOIN => Data from the LEFT table and RIGHT Table also if available
// RIGHT JOIN => Data from the RIGHT table and LEFT Table also if available (but in this current structure it's impossible to have a right column without it's corresponding left column as we define it in the foreign key)
// FULL JOIN => When you want all the data irrespective of their user data


async function main() {
  try {
    await client.connect();

    await createUsersTable();
    await createAddressesTable();
  
    await insertUsersData('testUser1', 'testuser1@example.com');
    await insertUsersData('testUser2', 'testuser2@example.com');
    await insertUsersData('testUser3', 'testuser3@example.com');
    await insertUsersData('testUser4', 'testuser4@example.com');
    await insertUsersData('testUser5', 'testuser5@example.com');
    await insertAddressesData(1, 'Faridabad', 'India');
    await insertAddressesData(1, 'Gurgaon', 'India');
    await insertAddressesData(2, 'Delhi', 'India');
    await insertAddressesData(3, 'Gurgaon', 'India');
  
    await fetchingUsersData('testuser1@example.com');
    await fetchingUsersData('testuser5@example.com');

    await updateUser('updatedUser', 'updated@example.com', 5);
    await fetchingUsersData('testuser5@example.com');
    await deleteUser(5);
    await fetchingUsersData('testuser5@example.com');
    
    await insertUserAndAddress('johndoe', 'john.doe@example.com', 'New York', 'USA');
    
    await fetchingFullDetails(1);
    await fetchingFullDetails(4);

  } catch(error) {
    console.error("Error in main function ", error);
  } finally {
    await client.end();
  }
}

main().catch(console.error);