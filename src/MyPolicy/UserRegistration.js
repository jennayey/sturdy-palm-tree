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
import Grid from "@mui/material/Grid";

import cocolife from "../assets/cocolife-horizontal.png";

function UserRegistration(props) {
  const [suffix, setSuffix] = React.useState("");
  const [siteName, setSiteName] = React.useState("");
  const [dateThing, setDateThing] = React.useState("");

  const handleSuffix = (event) => {
    setSuffix(event.target.value);
  };

  const handleSiteName = (event) => {
    setSiteName(event.target.value);
  };

  const handleDate = (event) => {
    setDateThing(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Paper variant="outlined" sx={{ py: 5, px: 4 }}>
        <Stack spacing={4}>
          <Box>
            <img src={cocolife} style={{ height: "25px" }} />
          </Box>
          <Box>
            <Typography variant="h4" color="primary"  sx={{ mb: 2}}>
              User Registration
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }} >
              Only <strong>Cocolife Policy payors</strong> are allowed to register. 
            </Typography>

            <Divider sx={{ mt: 1 }} />
          </Box>

          <FormControl sx={{ my: 1 }} fullWidth>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Stack>
                  <Typography variant="overline">First Name</Typography>

                  <TextField size="small" variant="outlined" hiddenLabel />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack>
                  <Typography variant="overline">Middle Name</Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack>
                  <Typography variant="overline">Last Name</Typography>

                  <TextField
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack>
                  <Typography variant="overline">Suffix</Typography>

                  <TextField size="small" variant="outlined" hiddenLabel />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack>
                  <Typography variant="overline">Date of Birth</Typography>

                  <TextField size="small" variant="outlined" hiddenLabel />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack>
                  <Typography variant="overline">Policy Number</Typography>

                  <TextField size="small" variant="outlined" hiddenLabel />
                </Stack>
              </Grid>
            </Grid>

            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={3}
              sx={{ mt: 5 }}
            > <Button
            variant="text"
            size="large"
            href="/"
          >
      
            Cancel
          </Button>
              <Button
                variant="contained"
                size="large"
                href="/registration-step2"
              >
          
                Next
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Paper>
    </Container>
  );
}

export default UserRegistration;
