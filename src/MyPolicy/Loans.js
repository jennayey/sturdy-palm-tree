import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";


import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Loans(props) {
  return (
    <Box>
      <Typography variant="h4"  color="text.primary" sx={{ mb: 5 }}>
        Loans
      </Typography>
      <Typography variant="h6">Policy Loans</Typography>
      <Typography variant="body1" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>

      <Box sx={{ mt: 8}}>
        {/* <Typography variant="h6" sx={{ mb: 2 }}>
          Policy Agent History / Transfer of Business
        </Typography> */}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Transaction Date{" "}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Transaction Amount{" "}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Interest{" "}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Transaction Type{" "}
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Interest Rate{" "}
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Accumulated Amount{" "}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Transaction No.{" "}
                </TableCell>

                {/* <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Sub-Std. Rate
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align="center" colSpan={7}>
<Typography variant="body1">No Records found</Typography>                </TableCell>
               
              </TableRow>
            </TableBody>
            
          </Table>
        </TableContainer>
       
      </Box>
    </Box>
  );
}

export default Loans;
