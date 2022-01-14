import React from "react";
import { Divider, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Grid from "@mui/material/Grid";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
export default function AccountProfileForm() {
  
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Account Profile Form
      </Typography>

      <Typography variant="h6">Personal Data</Typography>
      <Divider sx={{ mt: 1 }} />
      <Grid container spacing={2} sx={{ mt: 1}} >
          <Grid item xs={12} md={12} lg={12} xl={6}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography color="text" variant="overline">
             Employee No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="34343224"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography color="text" variant="overline">
             Certificate No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="223323455"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="overline">
             First Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="overline">
            Middle Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="overline">
             Last Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Suffix
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Age
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={4} sm={6}>
          <Stack>
            <Typography color="text" variant="overline">
             Date of Birth
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="12/24/2004"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="overline">
             Place of Birth
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Stack>
            <Typography color="text" variant="overline">
              Address
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Gender
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Civil Status
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Weight
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Stack>
            <Typography color="text" variant="overline">
             Height
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Test"
            />
          </Stack>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Tel. No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Mobile No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Application No.
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography color="text" variant="overline">
              Date Accomplished
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="09/23/2021"
            />
          </Stack>
        </Grid>
        {/* <Grid item xs={12} sx={{ mt: 3 }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="large">
              Update Information{" "}
            </Button>
            <Button variant="text" size="large">
              Cancel
            </Button>
          </Stack>
        </Grid> */}
      </Grid>
      </Grid>
      </Grid>
      <Divider sx={{mt: 5}}/>
  <Box sx={{mt: 5, display: "flex", justifyContent: "flex-end"}}><Button variant="text" sx={{mr: 2}}> Cancel</Button> <Button variant="contained"> Update</Button> </Box>

      
    </div>
  );
}
