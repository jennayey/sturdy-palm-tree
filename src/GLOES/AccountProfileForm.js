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

      <Typography variant="h6" color="text.primary">
        Personal Data
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
     
    </div>
  );
}
