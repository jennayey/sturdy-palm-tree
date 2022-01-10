import * as React from "react";

import Box from "@mui/material/Box";
 
import Typography from "@mui/material/Typography";

 

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function History() {
  function Transactions(
    createdDate,
    createdBy,
    oldValue,
    newValue,
   
  ) {
    return {
        createdDate,
        createdBy,
        oldValue,
        newValue,
     
    };
  }

  const transactionList = [
    Transactions(
     "5/21/2017 1:40:41PM",
     "Felix Hidalgo",
     "Active",
     "Client Initiated Cancellation"
    ),
    Transactions(
        "11/11/2014 3:30:15PM",
        "Felix Hidalgo",
        "10/09/14",
        "Active"
    ),
    Transactions(
        "3/21/2016 2:05:41PM",
        "Felix Hidalgo",
        "-NA-",
        "For Bank Approval"
    ),
  ];
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }} color="text.primary">
        History{" "}
      </Typography>
      <Typography variant="h6">Auto-Charge Arrangement Details</Typography>
      <Typography variant="body1"  color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Box>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Account Number{" "}
            </Typography>
            <Typography variant="h6">******14442</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}  xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
Recurring Type            </Typography>
            <Typography variant="h6">Banco De Oro (ADA)</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}  xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
             Effective Date
            </Typography>
            <Typography variant="h6">09-24-2017</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}  xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Expiry Date
            </Typography>
            <Typography variant="h6">10-24-2021</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}  xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
Status            </Typography>
            <Typography variant="h6">Inactive</Typography>
          </Grid>
         
         
        </Grid>
      </Box>
      <Box sx={{ mt: 5 }}>
      <Typography variant="subtitle2">Transaction History</Typography>
        <TableContainer component={Paper}  sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Plan
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Annual
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Semi-annual
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Quarterly
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionList.map((row) => (
                <TableRow
                  hover
                  key={row.createdDate}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.createdDate}
                  </TableCell>
                  <TableCell align="right">{row.createdBy}</TableCell>
                  <TableCell align="right">{row.oldValue}</TableCell>
                  <TableCell align="right">{row.newValue}</TableCell>
                </TableRow>
              ))}
              <TableRow />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
