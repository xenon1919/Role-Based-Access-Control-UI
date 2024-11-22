// api.js
import axios from "axios";

const apiUrl = "http://localhost:5000"; // Adjust the base URL for your backend

// Create role API request
export const createRole = async (roleData) => {
  try {
    const response = await axios.post(`${apiUrl}/roles`, roleData);
    return response.data;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

// Create user API request
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Fetch roles API request
export const fetchRoles = async () => {
  try {
    const response = await axios.get(`${apiUrl}/roles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

// Fetch users API request
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Update role API request
export const updateRole = async (roleId, updatedRole) => {
  try {
    const response = await axios.put(`${apiUrl}/roles/${roleId}`, updatedRole);
    return response.data;
  } catch (error) {
    console.error("Error updating role:", error);
    throw error;
  }
};

// Delete role API request
export const deleteRole = async (roleId) => {
  try {
    const response = await axios.delete(`${apiUrl}/roles/${roleId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting role:", error);
    throw error;
  }
};

// Delete user API request
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${apiUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
