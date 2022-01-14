import EditIcon from "@mui/icons-material/Edit";
import { Button, Divider, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

function Enrollment() {
  function Beneficiaries(
    name,
    birthday,
    age,
    relationship,
    revocable,
    sharing
  ) {
    return { name, birthday, age, relationship, revocable, sharing };
  }

  const BeneficiariesList = [
    Beneficiaries(
      "Camilla Cabello",
      "December 13, 1989",
      "32",
      "Child",
      "Yes",
      "100.00"
    ),
  ];
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Enrollment
      </Typography>

      <Typography variant="h5" sx={{ mt: 3 }} color="text.primary">
        Benjamin A. Bautista JR.
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }} color="text.linkActive">
        Employee No.: 80113582
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <Typography variant="subtitle2" sx={{ mt: 5 }}>
        Beneficiaries
      </Typography>
      <Box sx={{ mt: 2 }}>
        {/* <Typography variant="overline">Policies</Typography> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "600" }}>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Name
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>
                  Birthdate
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Age{" "}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Relationship
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Revocable
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "600" }}>
                  Sharing{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BeneficiariesList.map((row) => (
                <TableRow
                  hover
                  key={row.policyNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.birthday}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.relationship}</TableCell>
                  <TableCell align="center">{row.revocable}</TableCell>
                  <TableCell align="center">{row.sharing}</TableCell>
                </TableRow>
              ))}
              <TableRow />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        startIcon={<EditIcon />}
      >
        Manage Beneficiaries
      </Button>
    </div>
  );
}

export default Enrollment;
