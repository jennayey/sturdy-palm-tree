import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function EmployeeMovements(movement, oldValue, newValue, changeDate, userID, key) {
  return movement, oldValue, newValue, changeDate, userID, key;
}

function BeneficiaryMovements(name, movement, oldValue, newValue, changeDate, userID) {
  return name, movement, oldValue, newValue, changeDate, userID;
}

const empMovementsRows = [
  EmployeeMovements(
    "Civil Status",
    "Single",
    "Married",
    "12/7/2020 10:23:23AM",
    "20082186",
    1
  ),
  EmployeeMovements("Addition", "", "", "9/3/2020 1:23:23PM", "ICO", 2),
  EmployeeMovements("Addition", "", "", "9/3/2020 1:23:23PM", "ICO", 3),

];

const benMovementsRows = [
  BeneficiaryMovements(
    "Test, Test T",
    "Addition",
    "",
    "",
    "9/23/2020 3:44:20PM",
    "20082186"
  ),
  BeneficiaryMovements(
    "Bautista, Chloe",
    "Deletion",
    "",
    "",
    "9/23/2020 3:44:20PM",
    "20082186"
  ),
  BeneficiaryMovements(
    "Bautista, Chloe",
    "Addition",
    "",
    "",
    "9/17/2020 9:42:20PM",
    "20082186"
  ),
];
function AccountProfile(props) {
  return (
    <div>
      <Typography variant="h5" color="primary">
        Account Profile
      </Typography>
      <br />
      <Typography variant="overline">Employee Movements</Typography>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Movement</TableCell>
                <TableCell align="right">Old Value</TableCell>
                <TableCell align="right">New Value</TableCell>
                <TableCell align="right">Change Date</TableCell>
                <TableCell align="right">User ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {empMovementsRows.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.movement}
                  </TableCell>
                  <TableCell align="right">{row.oldValue}</TableCell>
                  <TableCell align="right">{row.newValue}</TableCell>
                  <TableCell align="right">{row.changeDate}</TableCell>
                  <TableCell align="right">{row.userID}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default AccountProfile;
