import { Grid, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Button,Divider } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
 import { Paper } from "@mui/material";
export default function EmployeeInquiryProfile() {
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
    Beneficiaries(
      "Shawn Levy",
      "May 11, 1979",
      "42",
      "Brother",
      "Yes",
      "100.00"
    ),
  ]

  function Records(
   name,submitDate, approveDate, approvedBy
  ) {
    return { name,submitDate, approveDate, approvedBy};
  }

  const RecordsList = [
    Records(
      "Birth Certificate",
      "December 13, 1989",
      "December 15, 1989",
      "Lenny Kravitz",
    ),
  ];

  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Employee Inquiry Profile
      </Typography>

      <Typography variant="h6" color="text.primary">
        Basic Information
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  First name
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Middle Name
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Last name
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  suffix
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Age
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Date Of Birth
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Gender
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Weight (lbs)
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Height (cm)
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6" color="text.primary" sx={{ mt: 8 }}>
        Additional Information
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Home Address
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Place of Birth
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Civil Status
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Email Address
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Telephone Number
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Site Information block */}

      <Typography variant="h6" color="text.primary" sx={{ mt: 8 }}>
        Policy Information
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Site
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  defaultValue="Samsung Electro-Mechanics Philippines Corporation"
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                 Employee No.
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                   Certificate No.
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Status
                </Typography>

                <TextField
                  size="small"
                  variant="outlined"
                  defaultValue="Approved"
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                 Employee Type
                </Typography>

                <TextField
                  size="small"
                  variant="outlined"
                  defaultValue="Rank & File"
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Date Hired
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Inception Date
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
Effective Date                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                  Termination Date
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                 Application No.
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}sm={6} md={6}>
              <Stack>
                <Typography variant="overline" color="text.body2">
                   Date Accomplished
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
            <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={3}
          sx={{ mt: 5 }}
        >
          <Button variant="text" size="large" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" size="large">
            Update Profile
          </Button>
        </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h6" color="text.primary" sx={{mt: 5}}>
        Beneficiary Details
      </Typography>
      <Divider sx={{ mt: 1 }} />
      <Typography  variant="subtitle2" sx={{mt:5}}>Beneficiary (IES) Movements</Typography>
      <Paper variant="outlined" sx={{ p: 2, mt:1 }}>
        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Name</TableCell>

                <TableCell>Birthdate</TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Age</TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Relationship</TableCell>
                <TableCell align="left"sx={{ fontWeight: "600" }}>Revocable</TableCell>
                <TableCell align="left"sx={{ fontWeight: "600" }}>Sharing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BeneficiariesList.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.birthday}
                  </TableCell>
                  <TableCell align="left">{row.age}</TableCell>
                  <TableCell align="left">{row.relationship}</TableCell>
                  <TableCell align="left">{row.revocable}</TableCell>
                  <TableCell align="left">{row.sharing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography  variant="subtitle2" sx={{mt:5}}>Requirements</Typography>
      <Paper variant="outlined" sx={{ p: 2, mt:1 }}>
        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Name</TableCell>

                <TableCell align="left" sx={{ fontWeight: "600" }}>Submit Date</TableCell>
                <TableCell align="left" sx={{ fontWeight: "600" }}>Approve Date</TableCell>
                <TableCell align="left"sx={{ fontWeight: "600" }}>Approved By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RecordsList.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.submitDate}
                  </TableCell>
                  <TableCell align="left">{row.approveDate}</TableCell>
                  <TableCell align="left">{row.approvedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
