import * as React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

        <Typography variant="h6" color="text.primary">
          Search Employee
        </Typography>
        <Divider />
        <br />
        <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
          <Typography variant="overline">Employee number</Typography>

          <TextField id="outlined-basic" variant="outlined" />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">First Name</Typography>

                <TextField variant="outlined" hiddenLabel />
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

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <Button variant="text" size="large">
              Clear
            </Button>
            <Button variant="contained" size="large">
              Search
            </Button>
          </Stack>
        </FormControl>
        <br />
      <br />
      {/* Search Results Section */}

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" color="text.primary">
          Search Results
        </Typography>
        <br />
        <Divider />
        <br />

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Movement</TableCell>
                <TableCell align="left">Old Value</TableCell>
                <TableCell align="left">New Value</TableCell>
                <TableCell align="left">Change Date</TableCell>
                <TableCell align="left">User ID</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <Typography variant="body1" align="center" sx={{ my: 5 }}>
          {" "}
          No search results
        </Typography>
      </Paper>
    </div>
  );
}

export default Maintenance;
