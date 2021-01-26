import { Grid,Button, Typography } from "@material-ui/core";
import React from "react";

const IeltsOnline = () => {
  return (
    <Grid container direction="row" alignItems="center" justify="space-around">
      <Grid item>
        <Button variant="outlined">
          <Typography variant="h1">Start Now</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default IeltsOnline;
