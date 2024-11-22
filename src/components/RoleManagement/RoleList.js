import React, { useContext } from "react";
import { RoleContext } from "../../contexts/RoleContext";
import {
  Button,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const RoleList = ({ onEdit }) => {
  const { roles, setRoles } = useContext(RoleContext);

  const handleDelete = (id) => {
    // Simulate deleting the role
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role Name</TableCell>
          <TableCell>Permissions</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            <TableCell>{role.permissions.join(", ")}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(role)}>Edit</Button>
              <IconButton onClick={() => handleDelete(role.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleList;
