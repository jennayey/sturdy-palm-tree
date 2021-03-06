import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";




export default function ForgotPassword() {
  return (
    <Box sx={{ height:'100vh', backgroundColor: 'background.default' }} >

    
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Paper variant="outlined" sx={{ py: 5, px: 4 }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="body">
              <Link href="/" color="text.linkActive" sx={{ textDecoration: "none" }}>
                Go Back
              </Link>
            </Typography>{" "}
          </Box>
          <Box>
          <Typography variant="h5" sx={{mb:2}}>Reset your password</Typography>{" "}
          <Typography variant="body">
            Please enter your username to reset your password. We will be sending you instructions on how to reset your password
          </Typography>
          </Box>
         
          <FormControl sx={{ my: 1, minWidth: 120 }} fullWidth>
            <Typography variant="overline">User ID</Typography>

            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value="Benjamin"
            />
            <Typography variant="subtitle2" sx={{mt:2}}>
           
            <Link href="#" sx={{ textDecoration: "none" }}  color="text.linkActive">
I don't know my username            </Link>{" "}
        
          </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 5 }}
              href="forgot-password-email"
            >
              Reset my password{" "}
            </Button>
          
           
          </FormControl>
         
        </Stack>
      </Paper>
    </Container>
    </Box>
  );
}
