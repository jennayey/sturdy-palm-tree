import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
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
  const [editMode, setEditMode] = React.useState(false);
  function handleEditMode() {
    if (editMode === true) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }
  function Beneficiaries(
    name,
    birthday,
    age,
    relationship,
    revocable,
    sharing,
    actions
  ) {
    return { name, birthday, age, relationship, revocable, sharing, actions };
  }

  const BeneficiariesList = [
    Beneficiaries(
      "Camilla Cabello",
      "December 13, 1989",
      "32",
      "Child",
      "Yes",
      "100.00",
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          onClick={handleEditMode}
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="secondary">
          <DeleteIcon />
        </IconButton>
      </Stack>
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
      <Typography variant="h6" sx={{ mt: 1, mb: 1 }} color="text.linkActive">
        Employee No.: 80113582
      </Typography>
      <Divider sx={{ mt: 1 }} />

      <Typography variant="subtitle2" sx={{ mt: 5 }}>
        Beneficiaries
      </Typography>
      <Paper sx={{ mt: 2 }}>
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
                <TableCell
                  align="center"
                  sx={{ fontWeight: "600" }}
                ></TableCell>
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
                  <TableCell align="center">{row.actions}</TableCell>
                </TableRow>
              ))}
              <TableRow />
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          {editMode ? (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Manage Beneficiaries</Typography>
              <Grid container sx={{ mt: 1 }} spacing={2}>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="overline" color="text.body2">
                      First Name{" "}
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      defaultValue="Camilla"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="overline" color="text.body2">
                      Middle Name{" "}
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      defaultValue="Estrabao"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="overline" color="text.body2">
                      Last Name{" "}
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      defaultValue="Cabello"
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
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="overline" color="text.body2">
                      Relationship{" "}
                    </Typography>

                    <Select
                      size="small"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Select Relationship</em>
                      </MenuItem>
                      <MenuItem value="Addition">Wife</MenuItem>
                      <MenuItem value="Addition">Husband</MenuItem>
                      <MenuItem value="Addition">Child</MenuItem>
                      <MenuItem value="Addition">Mother</MenuItem>
                      <MenuItem value="Addition">Father</MenuItem>
                    </Select>
                  </Stack>
                </Grid>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={3}
                    sx={{ mt: 5 }}
                  >
                    <Button
                      variant="text"
                      size="large"
                      color="secondary"
                      onClick={handleEditMode}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleEditMode}
                    >
                      Update Beneficiaries
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <></>
          )}
        </div>
      </Paper>
      {/* <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        startIcon={<EditIcon />}
      >
        Manage Beneficiaries
      </Button> */}
    </div>
  );
}

export default Enrollment;
