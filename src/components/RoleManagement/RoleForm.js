import React, { useState } from "react";
import { createRole, updateRole } from "../../api";
import {
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const RoleForm = ({ role, onSave }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );
  const permissions = ["Read", "Write", "Delete"];

  const togglePermission = (permission) => {
    const updatedPermissions = formData.permissions.includes(permission)
      ? formData.permissions.filter((perm) => perm !== permission)
      : [...formData.permissions, permission];
    setFormData({ ...formData, permissions: updatedPermissions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateRole(formData.id, formData);
    } else {
      await createRole(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Role Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <FormGroup>
        {permissions.map((permission) => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={formData.permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
            }
            label={permission}
          />
        ))}
      </FormGroup>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default RoleForm;
