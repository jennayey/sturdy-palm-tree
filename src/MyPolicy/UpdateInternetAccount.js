import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Link from "@mui/material/Link";
export default function UpdateInternetAccount() {
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        My Internet Account{" "}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
      <Typography variant="h6">Personal Information</Typography>
      <Button variant="text" color="secondary">Edit</Button>

      </Stack>

      <Divider sx={{ mt: 1 }} />
      <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} sx={{ mb: 5 }}>
      <Typography color="text.primary" variant="overline">
Profile Picture            </Typography>
          <Stack direction="row" spacing={2} alignItems="center"  sx={{mt:2}}>
            

           <Avatar sx={{ width: 128, height: 128}}>N</Avatar>
           <Stack spacing={2}>
         
<Button variant="contained" size="small">Change Profile Picture</Button>
<Button  size="small">Remove Profile Picture</Button>

           </Stack>

          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text.primary" variant="overline">
              First Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
              Middle Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Arellano"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
              Last Name
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Bautista Jr"
            />
          </Stack>
        </Grid>
       
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
              Email Address{" "}
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="benj@gmail.com"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
            Mobile number{" "}
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="benj@gmail.com"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="overline">
              User ID{" "}
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="23242733"
              disabled
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
        </Grid>*/}
      </Grid> 
      

      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", marginTop: "100px" }}
      >
        Change Password
      </Typography>
      <Divider sx={{ mt: 1 }} />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="overline">
              Old Password
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>
          <Stack sx={{ marginTop: "20px" }}>
            <Typography color="text" variant="overline">
              New Password
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>

          <Stack sx={{ marginTop: "20px" }}>
            <Typography color="text" variant="overline">
              Confirm New Password
            </Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="large">
              Update Password{" "}
            </Button>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption">
              Forgot your{" "}
              <Link href="#" sx={{ textDecoration: "none" }} color="secondary">
                username
              </Link>{" "}
              or{" "}
              <Link href="#" sx={{ textDecoration: "none" }} color="secondary">
                password
              </Link>
              ?
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
