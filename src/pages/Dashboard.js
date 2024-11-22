import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Button component={Link} to="/users" variant="contained">
        Manage Users
      </Button>
      <Button component={Link} to="/roles" variant="contained">
        Manage Roles
      </Button>
    </Container>
  );
};

export default Dashboard;
