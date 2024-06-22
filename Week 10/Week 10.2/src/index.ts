import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// after this you can use all Table (user and todo) and do operations on them

// TODO: by this you can insert data in the Users Table 
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName
    },
    select: {
      id: true,
      password: true,
    }
  })
  console.log(res);
}
insertUser("tanish_singh_015", "password", "Tanish", "Singhal");

// FIXME: if we run an errored query, then also the id increment



// TODO: by this you can update the table 
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(username: string, {
  firstName,
  lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  })
  console.log(res);
}
updateUser('tanish_singh_015', {
  firstName: "Tanish1111",
  lastName: 'Singh'
})
