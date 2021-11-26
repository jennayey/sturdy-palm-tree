import * as React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { borders } from "@mui/system";

function UserProfile(props) {
  return (
    <div>
      <Typography variant="h5" color="primary">
        User Profile
      </Typography>
      <br />
      <br />

      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Personal Information
      </Typography>
      <Divider sx={{ marginBottom: "15px" }} />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="caption">
              First Name
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Benjamin"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="caption">
             Middle Name
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Arellano"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="caption">
              Last Name
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Bautista Jr"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack>
            <Typography color="text" variant="caption">
User ID            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="23242733"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{mt:3}}>
        <Stack spacing={2} direction="row">
        <Button variant="contained" size="large">
Update Information          </Button>
          <Button variant="text" size="large">
             Cancel
            </Button>
        </Stack>
        </Grid>

      </Grid>

      <Typography variant="h5" sx={{ marginBottom: "10px", marginTop: "100px" }}>
        Change Password
      </Typography>
      <Divider sx={{ marginBottom: "15px" }} />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Typography color="text" variant="caption">
              Old Password
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>
          <Stack sx= {{ marginTop: "20px"}} >
            <Typography color="text" variant="caption">
              New Password
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>


          <Stack sx= {{ marginTop: "20px"}} >
            <Typography color="text" variant="caption">
              Confirm New Password
            </Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="filled"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
          </Stack>
         
           
        </Grid>
        <Grid item xs={12} sx={{mt:3}}>
        <Stack spacing={2} direction="row">
        <Button variant="contained" size="large">
Update Password            </Button>
          <Button variant="text" size="large">
              I forgot my password
            </Button>
        </Stack>
        </Grid>

         </Grid>
    </div>
  );
}

export default UserProfile;
