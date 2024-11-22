import React, { useState } from "react";
import RoleList from "../components/RoleManagement/RoleList";
import RoleForm from "../components/RoleManagement/RoleForm";

const Roles = () => {
  const [editingRole, setEditingRole] = useState(null);

  return (
    <div>
      <h1>Manage Roles</h1>
      <RoleList onEdit={setEditingRole} />
      <RoleForm role={editingRole} onSave={() => setEditingRole(null)} />
    </div>
  );
};

export default Roles;
