"use client";

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function SignIn() {
  
  const router = useRouter();

  return (
    <div>
      <input type="text" placeholder="email" />
      <br />
      <input type="password" placeholder="password" />
      <br />

      <button onClick={async () => {
        const res = await signIn("credentials", {
          username: "",
          password: "",
          redirect: false
        });
        console.log(res);
        router.push("/");
      }}>Login with Email</button>

      <hr />
      
      <button onClick={async () => {
        await signIn("google");
      }}>Login with Google</button>
      
      <br />
      
      <button onClick={async () => {
        await signIn("github");
      }}>Login with Github</button>
    </div>
  )
}