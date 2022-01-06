import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";


import DarkModeSwitch from "../components/DarkModeSwitch";



function RegisteredPolicies(policyNumber, plan, policyStatus) {
  return { policyNumber, plan, policyStatus };
}
function OtherPolicies(policyNumber, plan, policyStatus) {
    return { policyNumber, plan, policyStatus };
  }

const registeredList = [
    RegisteredPolicies(
     "T00114851", "Future Savings (Platinum)", "Inforce"
    )
  ];

  const otherList = [
    OtherPolicies(
     "T00114821", "Future Savings (Platinum)", "Automatic Lapse"
    ),  
    OtherPolicies(
        "T00114131", "Honey Accumulator Classic", "Inforce"
       )
  ];
function BasicInformation(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="overline" color="primary">
        Basic Information
      </Typography>
      <DarkModeSwitch />
      <Typography variant="h5">Add or Remove Policy</Typography>
      <br/>
      <Typography variant="body1">
        Your current policy registration is shown below. If you have more than
        one policy, you can add other policies by clicking the "Register this"
        link under the My Other Policies section.
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="subtitle2">Registered Policies</Typography>
        <Paper variant="outlined" sx={{ mt: 1, p: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: "600"}}>Policy Number</TableCell>
                  <TableCell align="left" sx={{fontWeight: "600"}}>Plan</TableCell>
                  <TableCell align="left" sx={{fontWeight: "600"}}>Policy Status</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {registeredList.map((row) => (
                  <TableRow
                    key={row.policyNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.policyNumber}
                    </TableCell>
                    <TableCell align="left">{row.plan}</TableCell>
                    <TableCell align="left">{row.policyStatus}</TableCell>
                    {/* <TableCell align="left">{row.changeDate}</TableCell> */}
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box> 
      
      <Box sx={{ mt: 7}}>
        <Typography variant="subtitle2">Other Policies (Unregistered Policies)</Typography>
        <Paper variant="outlined" sx={{ mt: 1, p: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: "600"}}>Policy Number</TableCell>
                  <TableCell align="left" sx={{fontWeight: "600"}}>Plan</TableCell>
                  <TableCell align="left" sx={{fontWeight: "600"}}>Policy Status</TableCell>
                  <TableCell align="center" sx={{fontWeight: "600"}}>Actions</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {otherList.map((row) => (
                  <TableRow
                    key={row.policyNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.policyNumber}
                    </TableCell>
                    <TableCell align="left">{row.plan}</TableCell>
                    <TableCell align="left">{row.policyStatus}</TableCell>
                    <TableCell align="center"><Button variant="contained">Register This</Button></TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default BasicInformation;
