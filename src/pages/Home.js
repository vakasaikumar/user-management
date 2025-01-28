import React, { useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleFormSubmit = () => {
    setSelectedUser(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <UserForm selectedUser={selectedUser} onFormSubmit={handleFormSubmit} />
      <UserList key={refresh} onEdit={handleEdit} />
    </div>
  );
};

export default Home;
