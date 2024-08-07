import axios from "axios";
// import { useEffect, useState } from "react";


// fetching in react js
// export default function User() {
//   const [data, setData] = useState({
//     email: "",
//     name: "",
//   })

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/user")
//       .then((response) => {
//         setData(response.data)
//       })
//   })

//   return (
//     <div>
//       {data.name}
//       {data.email}
//     </div>
//   )
// }


async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 3000));  // 3 seconds artificial delay

  const response = await axios.get(
    "http://localhost:3000/api/user"
  );
  return response.data;
}

// async function fetchUserDetails() {
//   await new Promise((r) => setTimeout(r, 3000));  // 3 seconds artificial delay

//   const response = await axios.get(
//     "http://localhost:3000/api/signup"
//   );
//   return response.data;
// }

// async component
export default async function Home() {
  const userDetails = await getUserDetails();
  // const fetchDetails = await fetchUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>

          {userDetails?.email}
        </div>
        {/* <div className="border p-8 rounded">
          <div>Name: {fetchDetails?.name}</div>

          {fetchDetails?.email}
        </div> */}
      </div>
    </div>
  );
}
