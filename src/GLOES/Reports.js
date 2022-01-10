import * as React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

function Reports(props) {
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
     <Typography variant="h4"  color="text.primary" sx={{ mb: 5 }}>
        Reports
      </Typography>

      {/* <Typography variant="overline">Upload your files</Typography> */}
      <Typography variant="h6" >Generate Report</Typography>
      <Divider sx={{ mt:1 }}/>
      <Box sx={{ mt:3 }}>
        <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
          <Typography variant="overline">Report Type</Typography>

          <Select
            value={reportType}
            onChange={handleReportType}
            size="small" 
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
            size="small" 
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
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Stack>
                <Typography variant="overline">Employee Type</Typography>

                <Select
                  value={reportType}
                  onChange={handleReportType}
                  size="small" 
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Select Employee Type</em>
                  </MenuItem>
                  <MenuItem value="Addition">Rank & File</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Stack>
                <Typography variant="overline">Status</Typography>

                <Select
                  value={reportType}
                  onChange={handleReportType}
                  size="small" 
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Select Status</em>
                  </MenuItem>
                  <MenuItem value="Addition">Approved</MenuItem>
                  <MenuItem value="Addition">Declined</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack>
                <Typography variant="overline">Upload Date</Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={0.5}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      
                      label=""
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dateThing}
                      onChange={(newValue) => {
                        setDateThing(newValue);
                      }}
                      renderInput={(params) => <TextField size="small"  {...params} />}
                    />
                  </LocalizationProvider>
                  <Typography variant="overline"> To </Typography>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label=""
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dateThing}
                      onChange={(newValue) => {
                        setDateThing(newValue);
                      }}
                      renderInput={(params) => <TextField size="small"  {...params} />}
                    />
                  </LocalizationProvider>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack>
                <Typography variant="overline">Change Date</Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={0.5}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label=""
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dateThing}
                      onChange={(newValue) => {
                        setDateThing(newValue);
                      }}
                      renderInput={(params) => <TextField size="small"  {...params} />}
                    />
                  </LocalizationProvider>
                  <Typography variant="overline"> To </Typography>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableFuture
                      label=""
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dateThing}
                      onChange={(newValue) => {
                        setDateThing(newValue);
                      }}
                      renderInput={(params) => <TextField size="small"  {...params} />}
                    />
                  </LocalizationProvider>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} >
              <Divider sx={{my: 2 }} />
              <Stack direction="row" justifyContent="flex-end" spacing={3}>
              <Button variant="text" size="large" color="secondary">Clear</Button>
              <Button variant="contained" size="large">Generate</Button>

              </Stack>
            </Grid>
          </Grid>
        </FormControl>
        <br />
      </Box>
    </div>
  );
}

export default Reports;
