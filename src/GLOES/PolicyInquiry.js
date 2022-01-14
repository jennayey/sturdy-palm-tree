import React from "react";
import { Divider, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Grid from "@mui/material/Grid";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
export default function PolicyInquiry() {
  function PolicyCoverage(id,empType, coverage, rate, amount) {
    return {id, empType, coverage, rate, amount};
  }
  const PolicyCoverageList = [
    PolicyCoverage(
    "1",
      "Daily",
      "GYRT - Group Yearly Renewable Term",
      "0.00",
      "200,000"
    ),
    PolicyCoverage(
        "2",
      "Daily",
      "ADDB - Accidental Death & Disablement Benefit",
      "0.00",
      "200,000"
    ),
    PolicyCoverage(   "3","Daily", "BB - Burial Benefit", "0.00", "20,000"),
    PolicyCoverage(
        "4",
      "Daily",
      "TPDB - Total & Permanent Disability Benefit",
      "0.00",
      "200,000"
    ),
  ];
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Policy Inquiry{" "}
      </Typography>

      <Typography variant="h6">Basic Information</Typography>
      <Divider sx={{ mt: 1 }} />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
              Policy No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Stack>
            <Typography color="text" variant="overline">
              Policy Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Arellano"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <Typography color="text" variant="overline">
              Address
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Arellano"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Tel. No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Mobile No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Effective Date
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Expiry Date
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        {/* <Grid item xs={12} sx={{ mt: 3 }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="large">
              Update Information{" "}
            </Button>
            <Button variant="text" size="large">
              Cancel
            </Button>
          </Stack>
        </Grid> */}
      </Grid>
      <Typography variant="h6" sx={{ mt: 5 }}>
        Policy Coverage
      </Typography>
      <Divider sx={{ mt: 1 }} />
      <Box sx={{ mt: 2 }}>
        {/* <Typography variant="overline">Policies</Typography> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Emp. Type
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Coverage
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Rate
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PolicyCoverageList.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                     <TableCell align="left" component="th" scope="row">
                    {row.empType}
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    {row.coverage}
                  </TableCell>
                  <TableCell align="left">{row.rate}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                </TableRow>
              ))}
              <TableRow />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
