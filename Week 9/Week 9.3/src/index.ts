// TODO: Pick
// if I only want to update the users name and age only, I can use the Pick utility type to create a new type that only includes the name and age properties from the User type.
// By this we can make a type which is related to the interface "User", which tell allt he properties whcih a user can change

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
};

type UpdatedUser = Pick<User, "name" | "age">;    // this tell all the things which a user can change

type UpdatedUserOptional = Partial<UpdatedUser>;    // this tell all the things which a user can change, but it is optional

function updateUserProfile(updateUser: UpdatedUserOptional) {
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
}
user.name = "pratyush";   // this will work, even though it is a constant
console.log(user.name);

const a = [1, 2, 3];
a[0] = 4;                // this will work, even though it is a constant
console.log(a);

// This means, i can't change the whoel object or the array, but i can change the properties inside the object or the array

type User1 = {
  readonly name: string;
  readonly age: number;
}

const user1: User1 = {
  name: "tanish",
  age: 21
}

// user1.name = "pratyush";   // this will not work, as the name is readonly

console.log("----------------------------------------------------------------------");

// TODO: Record and Map

// type User2 = {
//   id: string;
//   username: string;
// }

// type Users = {
//   [key: string]: User2;
// }

type Users2 = Record<string, {name: string; age: number}>;    // this is same as the above code

const users = {
  'abc123': { name: 'John Doe', age: 21 },
  'xyz789': { name: 'Jane Doe', age: 22 },
};

console.log(users['abc123']);



interface User3 {
  id: string;
  name: string;
}

const usersMap = new Map<string, User3>();

usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

console.log("----------------------------------------------------------------------");

// TODO: Exclude
type Operation = 'click' | 'scroll' | 'mousemove';
type ExcludeOperation = Exclude<Operation, 'scroll'>; // 'click' | 'mousemove'

const handleOperation = (operation: ExcludeOperation) => {
  console.log(`Handling operation: ${operation}`);
};

handleOperation('click');
// handleOperation('scroll'); 

console.log("----------------------------------------------------------------------");

// TODO: Type inference in ZOD
// check another file