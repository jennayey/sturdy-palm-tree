import * as React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

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
    <Box sx={{ width: '100%' }}>
     <Typography variant="h4"  color="primary" sx={{ mb: 5 }}>
        Maintenance
      </Typography>

      {/* <Typography variant="overline">Upload your files</Typography> */}
      {/* Search Employee Section */}

        <Typography variant="h6" color="text.primary">
          Search Employee
        </Typography>
        <Divider sx={{ mt:1 }}/>
        <br />
      <FormControl sx={{ my: 1}} fullWidth>
          <Typography variant="overline">Employee number</Typography>

          <TextField id="outlined-basic" size="small"  variant="outlined" />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">First Name</Typography>

                <TextField size="small" variant="outlined" hiddenLabel />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">Middle Name</Typography>

                <TextField id="outlined-basic" size="small"  variant="outlined" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Stack>
                <Typography variant="overline">Last Name</Typography>

                <TextField id="outlined-basic" size="small"  variant="outlined" />
              </Stack>
            </Grid>
          </Grid>
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

      <Paper variant="outlined" sx={{ p: 2, width: '100%'}}>
        <Typography variant="h6" color="text.primary">
          Search Results
        </Typography>
        <br />
        <Divider />
        <br />

        <TableContainer>
          <Table aria-label="simple table">
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
    </Box>
  );
}

export default Maintenance;
