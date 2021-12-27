import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { AccountCircle, InfoRounded } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import customtheme from "../customtheme";
import ListItemButton from "@mui/material/ListItemButton";
import MainContent from "./../MainContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Basic Information
      </Typography>
<<<<<<< Updated upstream
      <br />
      <Typography variant="h6">Add or Remove Policy</Typography>
=======
  
      <Typography variant="h5">Add or Remove Policy</Typography>
      <br/>
>>>>>>> Stashed changes
      <Typography variant="body1">
        Your current policy registration is shown below. If you have more than
        one policy, you can add other policies by clicking the "Register this"
        link under the My Other Policies section.
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Typography variant="overline">Registered Policies</Typography>
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
        <Typography variant="overline">Other Policies (Unregistered Policies)</Typography>
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
