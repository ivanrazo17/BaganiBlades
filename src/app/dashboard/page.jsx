// app/user-profile/page.jsx
import React from 'react';
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function UserProfile() {
  const { userId } = auth();

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  let user;
  try {
    user = await currentUser();
  } catch (error) {
    return <div>Error fetching user data</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  // Ensure `user` is a plain object
  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0].emailAddress,
    image: user.imageUrl
    // Add other necessary user fields here
  };

  return (
    <div>
        <h1>{userData.firstName}</h1>
        <h1>{userData.lastName}</h1>
        <h1>{userData.email}</h1>
    </div>
  );
}
