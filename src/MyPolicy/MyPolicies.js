import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ViewPolicy from "./ViewPolicy";
import { Link } from "@mui/material";
export default function MyPolicies() {
  function Transactions(policyNumber, plan, policyStatus, actions, view) {
    return {
      policyNumber,
      plan,
      policyStatus,
      actions,
      view
    };
  }
  const [viewPolicy, setViewPolicy] = React.useState("false");

  const handleViewPolicy = () => {
    if (viewPolicy===true){
      setViewPolicy(false)
    }
    else {
      setViewPolicy(true)
    } 
    // setViewPolicy(value);
  };
  const transactionList = [
    Transactions(
      "80113582",
      "Future Savings (PLatinum)",
      "Inforce",
      <Button variant="contained"> Pay Online</Button>,
<Button onClick={handleViewPolicy} variant="text"><Typography color="text.linkActive">View</Typography></Button>
    ),
  ];


  return (
    <div>
      {viewPolicy === true ? (
        <div>
          <Box>
            <Link
              onClick={handleViewPolicy}
              sx={{ textDecoration: "none", cursor: "pointer", mb: 5 }}
              color="text.linkActive"
            >
              Go Back to My Policies
            </Link>
          </Box>
          <br />
          <ViewPolicy />
        </div>
      ) : (
        <Box>
          <Typography variant="h4" sx={{ mb: 2 }} color="text.primary">
            My Policies
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Select a policy from the list below
          </Typography>
          {/* <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Typography variant="subtitle2" color="text.subtitle2">
            Account Number{" "}
          </Typography>
          <Typography variant="h6">******14442</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Typography variant="subtitle2" color="text.subtitle2">
            Recurring Type{" "}
          </Typography>
          <Typography variant="h6">Banco De Oro (ADA)</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Typography variant="subtitle2" color="text.subtitle2">
            Effective Date
          </Typography>
          <Typography variant="h6">09-24-2017</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Typography variant="subtitle2" color="text.subtitle2">
            Expiry Date
          </Typography>
          <Typography variant="h6">10-24-2021</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Typography variant="subtitle2" color="text.subtitle2">
            Status{" "}
          </Typography>
          <Typography variant="h6">Inactive</Typography>
        </Grid>
      </Grid> 
    </Box>*/}
          <Box sx={{ mt: 5 }}>
            <Typography variant="subtitle2">My Registered Policies</Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ fontWeight: "600" }}>
                    <TableCell align="left" sx={{ fontWeight: "600" }}>
                      Policy Number
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "600" }}>
                      Plan
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "600" }}>
                      Policy Status{" "}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "600" }}>
                      Actions
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "600" }}>
                      
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactionList.map((row) => (
                    <TableRow
                      onClick={handleViewPolicy}
                      hover
                      key={row.policyNumber}
                      sx={{
                        cursor: "pointer",
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.policyNumber}
                      </TableCell>
                      <TableCell align="center">{row.plan}</TableCell>
                      <TableCell align="center">{row.policyStatus}</TableCell>
                      <TableCell align="center">{row.actions}</TableCell>
                      <TableCell align="center">{row.view}</TableCell>

                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}{" "}
    </div>
  );
}
