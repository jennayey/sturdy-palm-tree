import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import cocolife from "./assets/cocolife-horizontal.png";

function Login() {
  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Paper variant="outlined" sx={{ py: 5, px: 4 }}>
        <Stack spacing={4}>
          <Box>
            <img src={cocolife} style={{ height: "25px" }} />
          </Box>
          <Typography variant="h5">Welcome back!</Typography>
          <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
            <Typography variant="overline">User ID</Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value="Benjamin"
            />
            <Typography variant="overline">Password</Typography>

            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
              hiddenLabel
              value="Benjamin"
              type="password"
            />
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
              href="/gloes"
            >
              Login to GLOES{" "}
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
              href="/mypolicy"
            >
              Login to MyPolicy{" "}
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
              href="/registration"
            >
              Register
            </Button>
          </FormControl>
          <Typography variant="caption">
            Forgot your{" "}
            <Link href="#" sx={{ textDecoration: "none" }} color="text.hint">
              username
            </Link>{" "}
            or{" "}
            <Link href="/forgot-password" sx={{ textDecoration: "none" }} color="primary">
              password
            </Link>
            ?
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Login;
