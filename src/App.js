import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Save the user, either updating an existing user or adding a new one
  const handleSave = (user) => {
    if (user.id) {
      // Edit existing user
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? user : u)));
    } else {
      // Add new user with a unique ID
      user.id = Date.now(); // Generate unique ID (replace with real database ID in production)
      setUsers((prevUsers) => [...prevUsers, user]);
    }
    setCurrentUser(null); // Reset currentUser after saving
  };

  // Set currentUser when editing
  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  // Delete a user by filtering out the user with the given ID
  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <UserForm currentUser={currentUser} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
