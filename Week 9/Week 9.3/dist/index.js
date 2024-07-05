"use strict";
// TODO: Pick
// if I only want to update the users name and age only, I can use the Pick utility type to create a new type that only includes the name and age properties from the User type.
// By this we can make a type which is related to the interface "User", which tell allt he properties whcih a user can change
;
function updateUserProfile(updateUser) {
    // hit the database to update the user profile
}
console.log("----------------------------------------------------------------------");
// TODO: Partial
// Partial makes all properties of an object optional. 
// now if the user only want to update the name or age only, then he/she can do it.
// see the above example
console.log("----------------------------------------------------------------------");
// TODO: ReadOnly
const user = {
    name: "tanish",
    age: 21
};
user.name = "pratyush"; // this will work, even though it is a constant
console.log(user.name);
const a = [1, 2, 3];
a[0] = 4; // this will work, even though it is a constant
console.log(a);
const user1 = {
    name: "tanish",
    age: 21
};
// user1.name = "pratyush";   // this will not work, as the name is readonly
console.log("----------------------------------------------------------------------");
const users = {
    'abc123': { name: 'John Doe', age: 21 },
    'xyz789': { name: 'Jane Doe', age: 22 },
};
console.log(users['abc123']);
const usersMap = new Map();
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
console.log("----------------------------------------------------------------------");
const handleOperation = (operation) => {
    console.log(`Handling operation: ${operation}`);
};
handleOperation('click');
// handleOperation('scroll'); 
console.log("----------------------------------------------------------------------");
// TODO: Type inference in ZOD
// check another file
