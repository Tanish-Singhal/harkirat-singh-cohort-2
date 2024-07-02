import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://neondb_owner:gZcjYwRz1u2G@ep-solitary-leaf-a5ghwh8v.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

// TODO: creating a Table
async function createUsersTable() {
  try {
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
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
        street INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        pincode INTEGER NOT NULL,
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
async function insertUsersData(username: string, email: string, password: string) {
  try {
    const query = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(query, values);

    console.log("Inserting data successfull", res);
  
  } catch(error) {
    console.error("Error while adding data", error);
  }
}

async function insertAddressesData(user_id: number, street: number, city: string, country: string, pincode: number) {
  try {
    const query = "INSERT INTO addresses (user_id, street, city, country, pincode) VALUES ($1, $2, $3, $4, $5)";
    const values = [user_id, street, city, country, pincode];
    const res = await client.query(query, values);
    
    console.log("Inserting data successfull", res);

  } catch(error) {
    console.error("Error while adding data", error);
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

async function fetchingFullDetails() {
  try {
    const query = "SELECT u.id, u.username, a.street, a.city, a.country, a.pincode FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = 2";
    const result = await client.query(query);
    
    console.log("Users with Addresses:", result.rows);
    return result.rows;

  } catch(error) {
    console.error("Error while fetching the data ", error);
  }
}


// TODO: Trasactions
// when you want to run multiple queries such that all of them run or none of them do.
async function insertUserAndAddress(username: string, email: string, password: string, city: string, country: string, street: string, pincode: string) {
  try {
    // starting of the transaction
    await client.query('BEGIN');

    const insertUserText = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"
    const usersValues = [username, email, password];
    const usersResult = await client.query(insertUserText, usersValues);

    const insertAddressText  = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)"
    const addressValues = [username, email, password];
    const addressResult = await client.query(insertAddressText, addressValues);

    await client.query('COMMIT');

    console.log("Users and Address inserted", usersResult, addressResult);

  } catch(error) {
    await client.query('ROLLBACK');     // Roll back the transaction on error
    console.log("Error while inserting the data", error);
  }
}


async function main() {
  try {
    await client.connect();

    await createUsersTable();
    await createAddressesTable();
  
    await insertUsersData('testUser', 'testuser@example.com', 'testUser@1887');
    await insertUsersData('testUser1', 'testuser1@example.com', 'testUser1@1887');
    await insertUsersData('testUser2', 'testuser2@example.com', 'testUser2@1887');
    await insertAddressesData(1, 410, 'Faridabad', 'India', 121002);
    await insertAddressesData(2, 654, 'Delhi', 'India', 124338);
    await insertAddressesData(3, 884, 'Gurgaon', 'India', 652348);
  
    await fetchingUsersData('testuser@example.com');
    await fetchingFullDetails();

    await insertUserAndAddress('johndoe', 'john.doe@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
  
  } catch(error) {
    console.error("Error in main function ", error);
  } finally {
    await client.end();
  }
}

main().catch(console.error);