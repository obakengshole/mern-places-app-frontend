import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ob Shole",
      image:
        "https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
