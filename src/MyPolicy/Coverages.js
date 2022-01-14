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
import { Divider } from "@mui/material";

function Policies(
  plan,
  annual,
  semiAnnual,
  quarterly,
  monthly,
  premRate,
  substdRate
) {
  return { plan, annual, semiAnnual, quarterly, monthly, premRate, substdRate };
}
function CoveragesList(
  plan,
premium,
faceAmount,
maturity,
payEnd,
status
) {
  return {   plan,
    premium,
    faceAmount,
    maturity,
    payEnd,
    status };
}
const coverageDetails = [
  CoveragesList(
    "Future Savings (Platinum) (10-Pay WL With A.E.(OPT 1))",
    "4,268.25",
    "100,000.00",
    "09-29-2077",
    "09-29-2044",
    "Inforce"

  ),
  CoveragesList(
    "Accidental Death & Dismemberment Add",
    "4,268.25",
    "100,000.00",
    "09-29-2077",
    "09-29-2044",
    "Inforce"

  ),
  CoveragesList(
    "Waiver of Premium Due to Disability - 10Pay (WPD)",
    "426.33",
    "225.95",
    "117.24",
    "41.57",
    "2.62",
    "0.0"
  ),
  CoveragesList(
    "Terminal Illness Living Benefit (TILB)",
    "426.33",
    "225.95",
    "117.24",
    "41.57",
    "2.62",
    "0.0"
  ),
];
const policyList = [
  Policies(
    "Future Savings (Platinum)",
    "15,522.00",
    "8,226.66",
    "4,268.55",
    "1,513.40",
    "151.22",
    "0.0"
  ),
  Policies(
    "Accidental Death & Dismemberment Add",
    "750.00",
    "397.50",
    "206.25",
    "73.13",
    "3.75",
    "0.0"
  ),
  Policies(
    "Waiver of Premium Due to Disability - 10Pay (WPD)",
    "426.33",
    "225.95",
    "117.24",
    "41.57",
    "2.62",
    "0.0"
  ),
];



function Coverages(props) {
  return (
    <Box>
      <Typography variant="h4" sx={{mb: 2}} color="text.primary">
        Coverages{" "}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{mb: 5}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Typography variant="h6">Premium Breakdowns</Typography>
    
      <Box sx={{ mt: 2}}>
        {/* <Typography variant="overline">Policies</Typography> */}
        <TableContainer component={Paper}>
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

                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Monthly
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Premium Rate
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Sub-Std. Rate
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {policyList.map((row) => (
                <TableRow
                hover
                  key={row.policyNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.plan}
                  </TableCell>
                  <TableCell align="right">{row.annual}</TableCell>
                  <TableCell align="right">{row.semiAnnual}</TableCell>
                  <TableCell align="right">{row.quarterly}</TableCell>
                  <TableCell align="right">{row.monthly}</TableCell>
                  <TableCell align="right">{row.premRate}</TableCell>
                  <TableCell align="right">{row.substdRate}</TableCell>
                </TableRow>
              ))}
              <TableRow />
              <TableRow>
                <TableCell align="right" colSpan={1}>
                <Typography variant="overline">Totals</Typography>  
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>16,698.33</TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>8,850.11</TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>4,592.04</TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>1,628.10</TableCell>

                <TableCell colSpan={3} />
              </TableRow>
              <TableRow>
                <TableCell align="right" colSpan={1} sx={{ fontWeight: "600" }}>
<Typography variant="overline">Current Premium</Typography>                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>16,698.33</TableCell>
                <TableCell align="right"sx={{ fontWeight: "600" }}>8,850.11</TableCell>

                <TableCell align="right"sx={{ fontWeight: "600" }}>4,592.04</TableCell>

                <TableCell align="right"sx={{ fontWeight: "600" }}>1,628.10</TableCell>

                <TableCell colSpan={3} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Typography variant="h6" sx={{mt: 5}}>Coverage Details </Typography>
    
      <Box sx={{ mt: 2}}>
        {/* <Typography variant="overline">Policies</Typography> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Plan
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Premium
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                 Face Amount
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Maturity
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>
                  Pay End
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: "600" }}>
Status                </TableCell>

                
              </TableRow>
            </TableHead>
            <TableBody>
              {coverageDetails.map((row) => (
                <TableRow
                hover
                  key={row.plan}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.plan}
                  </TableCell>
                  <TableCell align="right">{row.premium}</TableCell>
                  <TableCell align="right">{row.faceAmount}</TableCell>
                  <TableCell align="right">{row.maturity}</TableCell>
                  <TableCell align="right">{row.payEnd}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
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

export default Coverages;
