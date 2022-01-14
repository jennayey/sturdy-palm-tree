import { Grid, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "@mui/material";
export default function EmployeeInquiryProfile() {
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Employee Inquiry Profile
      </Typography>

      <Typography variant="h6" color="text.primary">
        Basic Information
      </Typography>
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
          </Grid>
        </Grid>
      </Grid>
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
    </div>
  );
}
