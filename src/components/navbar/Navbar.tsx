import type { ChangeEvent } from "react";
import { useContext } from "react";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AppStore from "app.store";

const Navbar = () => {
  const appStore = useContext(AppStore);
  const title = `All organizations ${
    appStore.organizationNo !== 0 ? `(${0})` : ""
  }`;

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    appStore.setSearchText(event.target.value);
  };

  return (
    <Grid
      container
      alignItems="center"
      className="Navbar"
      gap={{ xs: 4, sm: 0 }}
    >
      <Grid
        container
        item
        xs={12}
        sm={6}
        alignItems="center"
        flex={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "flex-start" }}
        gap={{ xs: 1, sm: 1, md: 4 }}
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <TextField
          size="small"
          value={appStore.searchText}
          onChange={handleSearchTextChange}
          label="Search organization"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={appStore.handleAddOrganization}
        >
          <Typography variant="button">Add New Organization</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
