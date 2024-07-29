"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>

      <button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>

      {/* how to render present inside the token (only works with client side component) */}
      {JSON.stringify(session)}
      {/* if want to use it for server side component, then go to user/page.tsx */}
    </div>
  );
};

// Thsi is how we can navigate to signin page and get signout without using useRouter. These function are provoded out of the box by nextAuth.