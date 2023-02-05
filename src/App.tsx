import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Navbar from "components/navbar/Navbar";
import OrganizationsList from "components/organizations/OrganizationsList";

import { AppStoreProvider } from "./app.store";
import "./App.scss";

function App() {
  return (
    <AppStoreProvider>
      <>
        <CssBaseline />
        <Container className="App" maxWidth="xl">
          <Paper elevation={0}>
            <Navbar />
            <Divider sx={{ my: 2 }} />
            <OrganizationsList />
            <div className="button-container">
              <Button variant="contained" size="large">
                <Typography variant="button">Load More</Typography>
              </Button>
            </div>
          </Paper>
        </Container>
      </>
    </AppStoreProvider>
  );
}

export default App;
