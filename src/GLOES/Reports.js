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

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Reports(props) {
  const [reportType, setReportType] = React.useState("");
  const [siteName, setSiteName] = React.useState("");

  const handleReportType = (event) => {
    setReportType(event.target.value);
  };

  const handleSiteName = (event) => {
    setSiteName(event.target.value);
  };

  return (
    <div>
      <Typography variant="h5" color="primary">
        Reports
      </Typography>
      <br />

      {/* <Typography variant="overline">Upload your files</Typography> */}

      <Paper variant="outlined" sx={{ p: 2 }}>
        <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
          <Typography variant="overline">Report Type</Typography>

          <Select
            value={reportType}
            onChange={handleReportType}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Report Type</em>
            </MenuItem>
            <MenuItem value="Addition">Addition</MenuItem>
            <MenuItem value="Change in Coverage">Change in Coverage</MenuItem>
            <MenuItem value="Deletion">Deletion</MenuItem>
            <MenuItem value="Update Basic Info">Update Basic Info</MenuItem>
          </Select>

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
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={12} lg={6} xl={6}>
            <Stack>
            <Typography variant="overline">Employee Type</Typography>

<Select
  value={reportType}
  onChange={handleReportType}
  displayEmpty
  inputProps={{ "aria-label": "Without label" }}
>
  <MenuItem value="">
    <em>Select Employee Type</em>
  </MenuItem>
  <MenuItem value="Addition">
             Rank & File
            </MenuItem>
</Select>
            </Stack>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
            <Stack>
            <Typography variant="overline">Status</Typography>

<Select
  value={reportType}
  onChange={handleReportType}
  displayEmpty
  inputProps={{ "aria-label": "Without label" }}
>
  <MenuItem value="">
    <em>Select Status</em>
  </MenuItem>
  <MenuItem value="Addition">
             Approved
            </MenuItem>
            <MenuItem value="Addition">
            Declined
            </MenuItem>
</Select>
            </Stack>
            </Grid>
          </Grid>
        </FormControl>
        <br />
      </Paper>
    </div>
  );
}

export default Reports;
