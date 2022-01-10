import * as React from "react";

import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

import cocolife from "../assets/cocolife-horizontal.png";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


export default function UserRegistration2() {
  return (
    <Box sx={{ height:'100vh', backgroundColor: 'background.default' }} >

    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Paper variant="outlined" sx={{ py: 5, px: 4 }}>
        <Stack spacing={4}>
          <Box>
            <img src={cocolife} style={{ height: "25px" }} />
          </Box>
          <Box>
          <Typography variant="h4" color="text.primary"  sx={{ mb: 2}}>
              User Registration
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }} >
              Only <strong>Cocolife Policy payors</strong> are allowed to register. 
            </Typography>
            <Divider sx={{ mt: 1 }} />
          </Box>

          <FormControl sx={{ my: 1 }} fullWidth>
            <Stack>
              <Typography variant="overline">Email address</Typography>

              <TextField size="small" variant="outlined" hiddenLabel />
            </Stack>
            <Stack sx={{ mt: 2 }}>
              <Typography variant="overline">Username</Typography>

              <TextField size="small" variant="outlined" hiddenLabel />
            </Stack>
            <Stack sx={{ mt: 2 }}>
              <Typography variant="overline" >Password</Typography>

              <TextField size="small" variant="outlined" type="password" hiddenLabel />
            </Stack>

            <Stack sx={{ mt: 2 }}>
              <Typography variant="overline" >Confirm Password</Typography>

              <TextField size="small" variant="outlined" type="password" hiddenLabel />
            </Stack>

              <FormControlLabel sx={{mt:2}} control={<Checkbox />} label={<Typography>By registering you agree to our <Link sx={{textDecoration: 'none'}} color="text.linkActive">Terms and Conditions</Link></Typography>} />

            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={3}
              sx={{ mt: 5 }}
            >
              <Button variant="text" size="large">
                <Link
                  href="/registration"
                  sx={{ textDecoration: "none" }}
                  color="text.linkActive"
                >
                  Back{" "}
                </Link>
              </Button>
              <Button variant="contained" size="large">
                Register
              </Button>
            </Stack>
          </FormControl>
         
        </Stack>
      </Paper>
    </Container>
    </Box>
  );
}
