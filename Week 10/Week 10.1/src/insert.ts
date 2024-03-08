import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'ep-raspy-heart-46223096.us-east-2.aws.neon.tech',
    port: 5432,
    database: 'learn',
    user: 'tanishsinghal510',
    password: 'fjr26HoTYMgx',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res);
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end();
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);