import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: Inserting Data into Table
async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
  const res = await prisma.user.create({
     data: {                  // this put the data in the table
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    },
    select: {                 // this is used to select the data that we want to see in the output
      id: true,
      firstName: true,
    }
  })
  console.log(res);
}
insertUser("tanish_singh_015", "password", "Tanish", "Singhal", "tanish@gmail.com");
insertUser("ramu_singh_015", "password", "Tanish", "Singhal", "ram@gmail.com");
insertUser("shyam_singh_015", "password", "Tanish", "Singhal", "shyam@gmail.com");

// FIXME: if we run an errored query, then also the id increment


// TODO: Updating data in Table
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(username: string, {
  firstName,
  lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {                  // this is used to select the data that we want to update
      username: username
    },
    data: {                   // this is used to update the data
      firstName: firstName,
      lastName: lastName
    }
  })
  console.log(res);
}
updateUser('tanish_singh_015', {
  firstName: "Baburao",
  lastName: 'Apte'
})


// TODO: Geeting user by email
async function getUserByEmail(email: string) {
  const res = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  console.log(res);
}
getUserByEmail('tanish@gmail.com');


// TODO: TODO in a Database
async function insertTodo(title: string, description: string, user_id: number) {
  const res = await prisma.todo.create({
    data: {
      title: title,
      description: description,
      user_id: user_id
    }
  })
  console.log(res);
}
insertTodo('Learn Postgres', 'Learn Prisma with Baburao', 1);
insertTodo('Learn Prisma', 'Learn Prisma with Ramu', 2);


// TODO: Getting all todos deatails along with its user deatils
async function getTodosAndUserDetails(email: string) {
  const res = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      id: true,
      username: true,
      todos: {
        select: {
          title: true,
          description: true
        }
      }
    }
  })
  console.log(res);
}
getTodosAndUserDetails("tanish@gmail.com");
