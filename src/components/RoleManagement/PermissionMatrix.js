import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from "@mui/material";

const PermissionMatrix = ({ roles, permissions, onPermissionChange }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role</TableCell>
          {permissions.map((permission) => (
            <TableCell key={permission}>{permission}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            {permissions.map((permission) => (
              <TableCell key={permission}>
                <Checkbox
                  checked={role.permissions.includes(permission)}
                  onChange={() => onPermissionChange(role, permission)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PermissionMatrix;
