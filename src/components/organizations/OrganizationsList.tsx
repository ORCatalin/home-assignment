import { useContext } from "react";
import Grid from "@mui/material/Grid";
import AppStore from "app.store";

import OrganizationItem from "./OrganizationItem";

const OrganizationsList = () => {
  const appStore = useContext(AppStore);
  return (
    <Grid container spacing={2}>
      {appStore.organizations.map((organization) => (
        <Grid xs={12} md={6} lg={4} item key={organization.id}>
          <OrganizationItem {...organization} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OrganizationsList;
