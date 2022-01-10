import * as React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Agent(
  agent, usd, asd, eff, post, userID
) {
  return {agent, usd, asd, eff, post, userID
  };
}

const agentList = [
  Agent(
    "Robin Scherbatsky", "Robin Charles Scherbatsky JR", "Maria Hill", "9/29/2014", "9/29,2014 - 3:55:55 PM", "J92TEC"
  ),
];

function Others(props) {
  return (
    <Box>
      <Typography variant="h4"  color="text.primary" sx={{ mb: 5 }}>
        Others{" "}
      </Typography>
      <Typography variant="h6">Policy Agents</Typography>
      <Typography variant="body1" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>

      <Box sx={{ mt: 5 }}>
      <Typography variant="h6" >Servicing Unit</Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">

              Agent Name
            </Typography>
            <Typography variant="h6" color="text.primary">John Doe</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
              Unit Name
            </Typography>
            <Typography variant="h6" color="text.primary">Unit 24277 - Insurance</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
              Unit Sales Director
            </Typography>
            <Typography variant="h6" color="text.primary">Juan Dela Cruz</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
              Agency Name
            </Typography>
            <Typography variant="h6" color="text.primary">Best Insurance Inc.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
Agency Sales Director            </Typography>
<Typography variant="h6" color="text.primary">Marshall Eriksen</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
Supervising Area Name            </Typography>
<Typography variant="h6" color="text.primary">Peter Parker</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
Area Head            </Typography>
<Typography variant="h6" color="text.primary">Barney Stinson</Typography>
          </Grid><Divider/>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
Effectivity Date            </Typography>
<Typography variant="h6" color="text.primary">December 21, 2015</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle2" color="text.subtitle2">
Post Date            </Typography>
            <Typography variant="h6" color="text.primary">December 21, 2025</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
      <Typography variant="subtitle2" sx={{ mb: 2}}>Policy Agent History / Transfer of Business</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Agent Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  USD Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
ASD Name                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
Effective Date                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Post Date
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
UserID                </TableCell>

                {/* <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Sub-Std. Rate
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {agentList.map((row) => (
                <TableRow
                  hover
                  key={row.userID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.agent}
                  </TableCell>
                  <TableCell align="center">{row.usd}</TableCell>
                  <TableCell align="center">{row.asd}</TableCell>
                  <TableCell align="center">{row.eff}</TableCell>
                  <TableCell align="center">{row.post}</TableCell>
                  <TableCell align="center">{row.userID}</TableCell>
                  {/* <TableCell align="right">{row.substdRate}</TableCell> */}
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

export default Others;
