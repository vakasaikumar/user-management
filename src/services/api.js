import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch users
export const fetchUsers = async () => {
  return await axios.get(API_URL);
};

// Add user
export const addUser = async (user) => {
  return await axios.post(API_URL, user);
};

// Update user
export const updateUser = async (id, user) => {
  return await axios.put(`${API_URL}/${id}`, user);
};

// Delete user
export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
