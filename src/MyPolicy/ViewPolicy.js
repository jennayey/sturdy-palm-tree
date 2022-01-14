import { Divider, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
export default function ViewPolicy() {
  function Transactions(detail, value) {
    return {
      detail,
      value,
    };
  }
  function Transactions2(detail, value) {
    return {
      detail,
      value,
    };
  }

  function InsuredProfile(detail, value) {
    return {
      detail,
      value,
    };
  }
  function policyOwnerProfile(detail, value) {
    return {
      detail,
      value,
    };
  }
  const transactionList = [
    Transactions("Policy Currency", "Philippine Peso"),
    // Transactions("Pay Mode", "Quarterly"),
    Transactions("Total Premium", "4,592.00"),
    Transactions("Billing Premium", "4,592.00"),
    Transactions("Replacement?", "N"),
    Transactions("Payment Method", "Telemarketing"),
    // Transactions("Next Due Date", "September 29, 2014"),
  ];

  const transactionList2 = [
    Transactions2("Non-Forfeiture Option", "No Non-Forfeiture Option"),
    Transactions2("Dividend Option", "N/A"),
    Transactions2("Effectivity Date", "September 29, 2014"),
    Transactions2("Approved Date", "September 29, 2014"),
    Transactions2("Issue Date", "September 29, 2014"),
    // Transactions("Next Due Date", "September 29, 2014"),
  ];
  const insuredProfileData = [
    InsuredProfile("Name", "Ferdie Romualdez"),
    InsuredProfile("Birth Date", "Novmeber, 22, 1977"),
    InsuredProfile("Effectivity Date", "37"),
    InsuredProfile("Civil Status", "Married"),
    // Transactions("Next Due Date", "September 29, 2014"),
  ];
  const policyOwnerProfileData = [
    policyOwnerProfile("Name", "Ferdie Romualdez"),
    policyOwnerProfile("Birth Date", "Novmeber, 22, 1977"),
    policyOwnerProfile("Company","Crocs Inc."),
    policyOwnerProfile("Address", "Pangmayaan Taysan, Batangas, 4228, PH"),
    policyOwnerProfile("Phone", "N/A"),
    policyOwnerProfile("Mobile Number", "0954-223-2333"),

    // Transactions("Next Due Date", "September 29, 2014"),
  ];
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 3 }} color="text.primary">
        Futures Savings Platinum{" "}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }} color="text.linkActive">
        Policy Number: 80113582
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={2} lg={3} xl={1}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Status
            </Typography>
            <Typography variant="h6">Inforce</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Pay Mode
            </Typography>
            <Typography variant="h6">Quarterly</Typography>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Issue Date:
            </Typography>
            <Typography variant="h6">September 29, 2014</Typography>
          </Grid> */}
          <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
            <Typography variant="subtitle2" color="text.subtitle2">
              Next Due Date
            </Typography>
            <Typography variant="h6">September 29, 205</Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* End of Summary */}

      <Divider sx={{ mt: 2, mb: 5 }} />
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }} color="text.primary">
        Policy Profile{" "}
      </Typography>
      {/* <Paper variant="outlined" sx={{ p: 2, mt: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} >
            <Grid container spacing={2}>
              <Grid item xs={5}>
              <Typography variant="body" sx={{fontWeight: "bold"}} color="text.primary">
              Policy Currency
            </Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography variant="body" color="text.primary">
              Philippine Peso
            </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="body" color="text.primary">
              Approved Date:
            </Typography>
          </Grid>
        </Grid>
      </Paper> */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={5.5} xl={6}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  {transactionList.map((row) => (
                    <TableRow
                      hover
                      key={row.detail}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        size="small"
                        component="th"
                        align="left"
                        scope="row"
                        padding="none"
                        sx={{ width: "200px" }}
                      >
                        <Typography variant="body1">{row.detail}</Typography>
                      </TableCell>
                      <TableCell size="small" align="left">
                        <Typography variant="body1">{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6.5} xl={6}>
            <TableContainer>
              <Table size="medium" aria-label="simple table">
                <TableBody>
                  {transactionList2.map((row) => (
                    <TableRow
                      hover
                      key={row.detail}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        size="small"
                        component="th"
                        align="left"
                        scope="row"
                        padding="none"
                        sx={{ width: "200px" }}
                      >
                        <Typography variant="body1">{row.detail}</Typography>
                      </TableCell>
                      <TableCell size="small" align="left">
                        <Typography variant="body1">{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>
      <Divider sx={{ mt: 2, mb: 5 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }} color="text.primary">
            Insured Profile{" "}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  {insuredProfileData.map((row) => (
                    <TableRow
                      hover
                      key={row.detail}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        size="small"
                        component="th"
                        align="left"
                        scope="row"
                        padding="none"
                        sx={{ width: "200px" }}
                      >
                        <Typography variant="body1">{row.detail}</Typography>
                      </TableCell>
                      <TableCell size="small" align="left">
                        <Typography variant="body1">{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }} color="text.primary">
            Policy Owner Profile
          </Typography>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  {policyOwnerProfileData.map((row) => (
                    <TableRow
                      hover
                      key={row.detail}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        size="small"
                        component="th"
                        align="left"
                        scope="row"
                        padding="none"
                        sx={{ width: "200px" }}
                      >
                        <Typography variant="body1">{row.detail}</Typography>
                      </TableCell>
                      <TableCell size="small" align="left">
                        <Typography variant="body1">{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
