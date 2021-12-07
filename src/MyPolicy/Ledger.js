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
import customtheme from "../theme/customtheme";
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

function PremiumPayments(acctPrd, batch, ORN, ORD, Amount, Remarks) {
  return { acctPrd, batch, ORN, ORD, Amount, Remarks};
}


const premiumPaymentList = [
    PremiumPayments("200626", "200626", "99944798", "06-26-2020", "4,592.04", "Premium Payment"),
    PremiumPayments("232626", "203226", "11244223", "03-26-2020", "4,592.04", "Premium Payment"),
    PremiumPayments("238926", "788826", "87844877", "03-26-2020", "4,592.04", "Premium Payment"),
    PremiumPayments("232355", "738990", "87555447", "02-26-2020", "4,592.04", "Premium Payment"),
]

function Ledger(props) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Ledger{" "}
      </Typography>
      <br />
      <Typography variant="h6">Premium Payments</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>

      
{/* //Second Table */}
      <Box sx={{ mt: 7 }}>
        {/* <Typography variant="h6" sx={{mb: 3}}>Premium Payments</Typography> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Acctg Period
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                Batch Number
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
OR Number                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  OR Date
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Amount Paid
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
Remarks                </TableCell>

              
              </TableRow>
            </TableHead>
            <TableBody>
              {premiumPaymentList.map((row) => (
                <TableRow
                hover
                  key={row.ORN}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.acctPrd}
                  </TableCell>
                  <TableCell align="center">{row.batch}</TableCell>
                  <TableCell align="center">{row.ORN}</TableCell>
                  <TableCell align="center">{row.ORD}</TableCell>
                  <TableCell align="center">{row.Amount}</TableCell>
                  <TableCell align="center">{row.Remarks}</TableCell>
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

export default Ledger;
