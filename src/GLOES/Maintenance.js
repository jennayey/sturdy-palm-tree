import * as React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

function Maintenance(props) {
  const [reportType, setReportType] = React.useState("");
  const [siteName, setSiteName] = React.useState("");
  const [dateThing, setDateThing] = React.useState("");

  const handleReportType = (event) => {
    setReportType(event.target.value);
  };

  const handleSiteName = (event) => {
    setSiteName(event.target.value);
  };

  const handleDate = (event) => {
    setDateThing(event.target.value);
  };

  return (
    <div>
      <Typography variant="h5" color="primary">
        Maintenance
      </Typography>
      <br />

      {/* <Typography variant="overline">Upload your files</Typography> */}
{/* Search Employee Section */}

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" color="primary">Search Employee</Typography>
        <br /> 
        <Divider />
        <br />
        <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
          <Typography variant="overline">Employee number</Typography>

          <TextField id="outlined-basic" variant="outlined" />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">First Name</Typography>

                <TextField id="outlined-basic" variant="outlined" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">Middle Name</Typography>

                <TextField id="outlined-basic" variant="outlined" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">Last Name</Typography>

                <TextField id="outlined-basic" variant="outlined" />
              </Stack>
            </Grid>
          </Grid>
          <Typography variant="overline" sx={{ mt: 2 }}>
            Site
          </Typography>

          <Select
            value={siteName}
            onChange={handleSiteName}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Site</em>
            </MenuItem>
            <MenuItem value="Addition">
              Samsung Electro-Mechanics Philippines Corporation{" "}
            </MenuItem>
          </Select>

          <br /> 
        <Divider />
        <br />
      
              <Stack direction="row" justifyContent="flex-end" spacing={3}>
              <Button variant="text" size="large">Clear</Button>
              <Button variant="contained" size="large">Search</Button>

              </Stack>
           
        </FormControl>
        <br />
      </Paper>
<br/>
{/* Search Results Section */}

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" color="primary">Search Results</Typography>
        <br /> 
        <Divider />
        <br />
        
      </Paper>
    </div>
  );
}

export default Maintenance;
