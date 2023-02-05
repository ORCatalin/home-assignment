import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

import DefaultCompanyLogoImg from "assets/default-company-logo.png";
import type { OrganizationType } from "common/models";

import "./OrganizationItem.scss";

const OrganizationItem = ({
  title,
  tracking,
  protection,
  logoSrc,
}: OrganizationType) => {
  const [localState, setLocalState] = useState({
    trackingAssigned: tracking.assigned,
    protectionAssigned: protection.assigned,
  });

  const handleLocalStateChange = (event) => {
    setLocalState({
      ...localState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card elevation={1} classes={{ root: "OrganizationItem" }}>
      <CardHeader
        avatar={
          <Avatar
            alt={`${title} logo`}
            src={logoSrc || DefaultCompanyLogoImg}
          />
        }
        title={
          <Typography fontWeight="bold" variant="h6">
            {title}
          </Typography>
        }
        action={
          <IconButton size="large">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Divider sx={{ mx: 2 }} />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Licenses
        </Typography>

        <Grid container>
          <Grid item xs={6} container gap={2} p={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" fontWeight="bold">
                Tracking
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Typography variant="body2">In use:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" classes={{ root: "danger" }}>
                  {tracking.used}
                </Typography>
              </Grid>
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography variant="body2">Assigned:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Input
                  onChange={handleLocalStateChange}
                  type="number"
                  name="trackingAssigned"
                  value={localState.trackingAssigned}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container gap={2} p={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" fontWeight="bold">
                Protection
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Typography variant="body2">In use:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" classes={{ root: "success" }}>
                  {protection.used}
                </Typography>
              </Grid>
              <Grid item xs={6} display="flex" alignItems="center">
                <Typography variant="body2">Assigned:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Input
                  onChange={handleLocalStateChange}
                  type="number"
                  value={localState.protectionAssigned}
                  name="protectionAssigned"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrganizationItem;
