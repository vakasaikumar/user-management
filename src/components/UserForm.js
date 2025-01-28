import React, { useState, useEffect } from "react";

const UserForm = ({ currentUser, onSave }) => {
  const [user, setUser] = useState({ id: "", firstName: "", lastName: "", email: "", department: "" });

  // Populate the form with the current user's data if editing
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ id: "", firstName: "", lastName: "", email: "", department: "" }); // Clear form when not editing
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ id: "", firstName: "", lastName: "", email: "", department: "" }); // Reset form after submission
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={user.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{currentUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
