import React, { useState } from "react";
import UserList from "../components/userManagement/UserList";
import UserModal from "../components/userManagement/UserModal";
import { RoleContext } from "../contexts/RoleContext";
import { useContext } from "react";

const Users = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { roles } = useContext(RoleContext);

  const handleSave = (user) => {
    // Save logic
    console.log("Saved User:", user);
    setEditingUser(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <UserList
        onEdit={(user) => {
          setEditingUser(user);
          setModalOpen(true);
        }}
      />
      <UserModal
        open={isModalOpen}
        handleClose={() => setModalOpen(false)}
        user={editingUser}
        onSave={handleSave}
        roles={roles}
      />
    </div>
  );
};

export default Users;
