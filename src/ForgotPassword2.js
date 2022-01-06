import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";



export default function ForgotPassword2() {
    return (
        <Container maxWidth="sm" sx={{ p: 2 }}>
        <Paper variant="outlined" sx={{ py: 5, px: 4 }}>
          <Stack spacing={4}>
            <Box>
              <Typography variant="body">
                <Link href="/forgot-password" sx={{ textDecoration: "none" }}>
                  Go Back
                </Link>
              </Typography>{" "}
            </Box>
            <Box>
            <Typography variant="h5" sx={{mb:2}}>Let's reset your password</Typography>{" "}
            <Typography variant="body">
              Please enter your new password. Make sure it's to choose a strong password.
            </Typography>
            </Box>
           
            <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
              <Typography variant="overline">New password</Typography>
  
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                value="Benjamin"
                type="password"
              />

<Typography variant="overline" sx={{mt: 2}}>Confirm New password</Typography>
  
  <TextField
    id="outlined-basic"
    size="small"
    variant="outlined"
    value="Benjamin"
    type="password"

  />
 
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 5 }}
                href="/"
              >
                Reset password{" "}
              </Button>
            
             
            </FormControl>
           
          </Stack>
        </Paper>
      </Container>
    )
}
