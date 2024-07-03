"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
});
// TODO: creating a Table
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
            console.log("Table created successfully:", result);
        }
        catch (error) {
            console.error("Error while creating Table: ", error);
        }
    });
}
// Foreign Key
function createAddressesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      CREATE TABLE IF NOT EXISTS addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
            console.log("Table created successfully:", result);
        }
        catch (error) {
            console.error("Error while creating Table: ", error);
        }
    });
}
// TODO: inserting data in the Table
function insertUsersData(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      INSERT INTO users (username, email) 
      VALUES ($1, $2)
    `;
            const values = [username, email];
            const res = yield client.query(query, values);
            console.log("Inserting data successfull", res);
        }
        catch (error) {
            console.error("Error while adding data", error);
        }
    });
}
function insertAddressesData(user_id, city, country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      INSERT INTO addresses (user_id, city, country) 
      VALUES ($1, $2, $3)
    `;
            const values = [user_id, city, country];
            const res = yield client.query(query, values);
            console.log("Inserting data successful", res);
        }
        catch (error) {
            console.error("Error while adding data", error);
        }
    });
}
// TODO: Update data
function updateUser(username, email, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      UPDATE users
      SET username = $1, email = $2
      WHERE id = $3
    `;
            const values = [username, email, userId];
            const res = yield client.query(query, values);
            console.log("Updating user data successful", res);
        }
        catch (error) {
            console.error("Error while updating user data", error);
        }
    });
}
// TODO: Delete the data
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      DELETE FROM users
      WHERE id = $1
    `;
            const values = [userId];
            const res = yield client.query(query, values);
            console.log("Deleting user successful", res);
        }
        catch (error) {
            console.error("Error while deleting user", error);
        }
    });
}
// TODO: Fetching data from Table
function fetchingUsersData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log("User found: ", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No user found with the given email");
                return null;
            }
        }
        catch (error) {
            console.error("Error while fetching the data ", error);
        }
    });
}
// TODO: Trasactions
// when you want to run multiple queries such that all of them run or none of them do.
function insertUserAndAddress(username, email, city, country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // starting of the transaction
            yield client.query('BEGIN');
            const insertUserText = `
      INSERT INTO users (username, email)
      VALUES ($1, $2)
    `;
            const usersValues = [username, email];
            const usersResult = yield client.query(insertUserText, usersValues);
            const insertAddressText = `
      INSERT INTO users (username, email)
      VALUES ($1, $2)
    `;
            const addressValues = [city, country];
            const addressResult = yield client.query(insertAddressText, addressValues);
            yield client.query('COMMIT');
            console.log("Users and Address inserted", usersResult, addressResult);
        }
        catch (error) {
            yield client.query('ROLLBACK'); // Roll back the transaction on error
            console.log("Error while inserting the data", error);
        }
    });
}
// TODO: Joins
function fetchingFullDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      SELECT u.id, u.username, u.email, a.city, a.country
      FROM users u
      JOIN addresses a ON u.id = a.user_id
      WHERE u.id = $1
    `;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0) {
                console.log('User and address found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user or address found with the given ID.');
                return null;
            }
        }
        catch (error) {
            console.error("Error while fetching the data ", error);
        }
    });
}
// INNER JOIN => JOIN and INNER JOIN are same
// LEFT JOIN => Data from the LEFT table and RIGHT Table also if available
// RIGHT JOIN => Data from the RIGHT table and LEFT Table also if available (but in this current structure it's impossible to have a right column without it's corresponding left column as we define it in the foreign key)
// FULL JOIN => When you want all the data irrespective of their user data
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield createUsersTable();
            yield createAddressesTable();
            yield insertUsersData('testUser1', 'testuser1@example.com');
            yield insertUsersData('testUser2', 'testuser2@example.com');
            yield insertUsersData('testUser3', 'testuser3@example.com');
            yield insertUsersData('testUser4', 'testuser4@example.com');
            yield insertUsersData('testUser5', 'testuser5@example.com');
            yield insertAddressesData(1, 'Faridabad', 'India');
            yield insertAddressesData(1, 'Gurgaon', 'India');
            yield insertAddressesData(2, 'Delhi', 'India');
            yield insertAddressesData(3, 'Gurgaon', 'India');
            yield fetchingUsersData('testuser1@example.com');
            yield fetchingUsersData('testuser5@example.com');
            yield updateUser('updatedUser', 'updated@example.com', 5);
            yield fetchingUsersData('testuser5@example.com');
            yield deleteUser(5);
            yield fetchingUsersData('testuser5@example.com');
            yield insertUserAndAddress('johndoe', 'john.doe@example.com', 'New York', 'USA');
            yield fetchingFullDetails(1);
            yield fetchingFullDetails(4);
        }
        catch (error) {
            console.error("Error in main function ", error);
        }
        finally {
            yield client.end();
        }
    });
}
main().catch(console.error);
