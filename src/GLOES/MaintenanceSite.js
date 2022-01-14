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
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableBody } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

function MaintenanceSite(props) {
  const [reportType, setReportType] = React.useState("");
  const [siteName, setSiteName] = React.useState("");
  const [dateThing, setDateThing] = React.useState("");
function maintenanceSites (siteCode, siteName, status) {
    return {siteCode,siteName, status}
}

const maintenanceSitesList = [
    maintenanceSites("00064", "Samsung Electro-Mechanics Philippines Corporation", "Active")
]
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
     <Typography variant="h4"  color="text.primary" sx={{ mb: 5 }}>
        Site Maintenance
      </Typography>

      {/* <Typography variant="overline">Upload your files</Typography> */}
      {/* Search Employee Section */}

        <Typography variant="h6" color="text.primary">
          Search Site
        </Typography>
        <Divider sx={{ mt:1 }}/>
      <FormControl sx={{ my: 1}} fullWidth>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Stack>
                <Typography variant="overline">Site Name</Typography>

                <TextField size="small" variant="outlined" hiddenLabel />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack>
                <Typography variant="overline">Site Code</Typography>

<TextField id="outlined-basic" size="small"  variant="outlined" />
                </Stack>
           
            </Grid>
          </Grid>
          <Typography variant="overline" sx={{ mt: 2 }}>
            Status
          </Typography>

          <Select
            value={siteName}
            onChange={handleSiteName}
            size="small" 
            displayEmpty

            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Status</em>
            </MenuItem>
            <MenuItem value="Addition">
              Active
            </MenuItem>
            <MenuItem value="Addition">
              Inactive
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
            <Button variant="text" size="large" color="secondary">
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
      <Typography variant="h6" color="text.primary" sx={{ mt: 5 }}>
          Search Results
        </Typography>
       
        <Divider sx={{ mt: 1 }} />
      
      <Box sx={{mt: 3}}>
        

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Site Code</TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Site Name</TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {maintenanceSitesList.map((row) => (
                <TableRow
                  hover
                  key={row.siteCode}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                     <TableCell align="left" component="th" scope="row">
                    {row.siteCode}
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    {row.siteName}
                  </TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default MaintenanceSite;
