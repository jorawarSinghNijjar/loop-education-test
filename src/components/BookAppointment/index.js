import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { Box,Button, Grid } from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from './styles';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box className={classes.datePickerBox}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <DateTimePicker label="Date and Time" inputVariant="outlined" value={selectedDate} onChange={setSelectedDate} className={classes.datePicker}/>

          <Button variant="contained" color="primary">
            Book Appointment
          </Button>
        </Grid>
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default BookAppointment;
