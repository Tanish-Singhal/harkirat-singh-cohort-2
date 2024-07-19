import axios from "axios";

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 3000));  // 3 seconds artificial delay

  const response = await axios.get(
    "http://localhost:300/api/user"
  );
  return response.data;
}

// async component
export default async function Home() {
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
