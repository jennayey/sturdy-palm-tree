import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import cocolife from "./assets/cocolife-horizontal.png";
import { Divider } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
function Login() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Privacy Policy Statement
            </Typography>
            <Typography
              id="transition-modal-description"
              align="center"
              sx={{ mt: 2 }}
            >
            <Divider sx={{mb: 3}}/>
              Your privacy is important to us. By using this site, you agree to
              the use of cookies and your personal information in accordance
              with our{" "}
              <Link
                href="/privacy-policy"
                sx={{ textDecoration: "none" }}
                color="text.linkActive"
              >
                Privacy Policy
              </Link>
            </Typography>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 4 }}>
              I agree
            </Button>
          </Box>
        </Fade>
      </Modal>

      <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
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
                  href="/mypolicy"
                >
                  Login to MyPolicy{" "}
                </Button>
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
                  href="/registration"
                >
                  Register
                </Button>
              </FormControl>
              <Typography variant="caption">
                Forgot your{" "}
                <Link
                  href="#"
                  sx={{ textDecoration: "none" }}
                  color="text.hint"
                >
                  username
                </Link>{" "}
                or{" "}
                <Link
                  href="/forgot-password"
                  sx={{ textDecoration: "none" }}
                  color="text.linkActive"
                >
                  password
                </Link>
                ?
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
