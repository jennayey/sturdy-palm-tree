import { Box, Grid, Paper, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";
export default function EmployeeInquiry() {
  const [siteName, setSiteName] = React.useState("");
  const handleSiteName = (event) => {
    setSiteName(event.target.value);
  };

  const [status, setStatus] = React.useState("");
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const [viewResults, setViewResults] = React.useState(false);
  function handleViewResults () {
    if (viewResults === true) {
      setViewResults(false);
    } else {
      setViewResults(true);
    }
  }
  function searchResults(employeeNo, name, status, view) {
    return { employeeNo, name, status, view };
  }

  const searchResultsList = [
    searchResults(
      20677748,
      "Abadilla, Ryan P.",
      "Approved",
      <Button variant="text">View</Button>
    ),
    searchResults(
        20379004,
        "Adao, Amarose V.",
        "Approved",
        <Button variant="text">View</Button>
      ),
  ];
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Employee Inquiry
      </Typography>

      <Typography variant="h6">Search Employee</Typography>
      <Divider sx={{ mt: 1 }} />
      <FormControl sx={{ my: 1 }} fullWidth>
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

              <TextField id="outlined-basic" size="small" variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack>
              <Typography variant="overline">Last Name</Typography>

              <TextField id="outlined-basic" size="small" variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ mt: 1 }}>
            <Stack>
              <Typography variant="overline">Employee number</Typography>

              <TextField id="outlined-basic" size="small" variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ mt: 1 }}>
            <Stack>
              <Typography variant="overline">Employee Status</Typography>
              <Select
                value={status}
                onChange={handleStatus}
                size="small"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                <MenuItem value="Addition">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Terminated">Terminated</MenuItem>
              </Select>{" "}
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
          <Button variant="text" size="large" color="secondary">
            Clear
          </Button>
          <Button variant="contained" size="large" onClick={handleViewResults}>
            Search
          </Button>
        </Stack>
      </FormControl>

      <div>
        {viewResults ? (
          <Box>
            <Typography variant="h6" sx={{ mt: 5 }}>
              Search Results
            </Typography>
            <Divider sx={{ mt: 1 }} />
            <Box sx={{ mt: 2 }}>
              {/* <Typography variant="overline">Policies</Typography> */}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ fontWeight: "600" }}>
                      <TableCell align="left" sx={{ fontWeight: "600" }}>
                        Employee No.
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "600" }}>
                        Name
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "600" }}>
                        Status
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "600" }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchResultsList.map((row) => (
                      <TableRow
                        hover
                        key={row.employeeNo}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      ><TableCell align="left" component="th" scope="row">
                      {row.employeeNo}
                    </TableCell>
                        <TableCell align="left" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">{row.view}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow />
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
