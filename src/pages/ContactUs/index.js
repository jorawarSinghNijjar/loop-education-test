import { TextField, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
        <div className={classes.header}>
            <Typography variant="h3" className={classes.heading}>
                LET US KNOW
            </Typography>
        </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={6}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="stretch"
            component="form"
            spacing={4}
            className={classes.form}
          >
            <Grid item>
              <TextField
                variant="outlined"
                label="Name"
                id="name"
                type="text"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Email"
                id="email"
                type="email"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Message"
                id="message"
                placeholder="Let us know your problems.."
                rowsMax={5}
                multiline
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.submitBtn}
              >
                <Typography variant="subtitle1">
                  Submit <i class="fas fa-paper-plane"></i>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
