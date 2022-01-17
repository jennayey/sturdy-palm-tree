import { Button, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};
export default function PayOnline() {
  const [policy, setPolicy] = React.useState("");
  const handleChange = (event) => {
    setPolicy(event.target.value);
  };
  const [payment, setPayment] = React.useState("");
  const handleChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [accepted, setAccepted] = React.useState(false);
  const handlea = () => setAccepted(true);
  const handleac = () => setAccepted(false);

  function acceptTerms() {
    handlea();
    handleClose();
  }

  function cancelTerms() {
    handleac();
    console.log("cancel lol")
    handleClose();
  }

  return (
    <div>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEscapeKeyDown
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Online Credit Card Payment Terms and Conditions
            </Typography>
            <Typography
              id="transition-modal-description"
              align="left"
              sx={{ mt: 2 }}
            >
              <Divider sx={{ mb: 3 }} />
              <Typography variant="body">
                <ol type="1">
                  <li>
                    By using the COCOLIFE online payment facility, I am
                    authorizing COCOLIFE to charge premium payments due to
                    COCOLIFE from my credit card for my enrolled policies.
                  </li>
                  <li>
                    COCOLIFE online payment facility also allows me to use valid
                    credit cards of any of my immediate family members (spouse,
                    children,parents, brothers, and sisters). In such cases, I
                    have expressly authorized by the cardholder or given consent
                    to use their credit card for my payment transaction under my
                    enrolled policies using this facility COCOLIFE will not be
                    held liable in case of dispute which may arise in the course
                    of transaction.
                  </li>
                  <li>
                    The payment transaction through credit crad using COCOLIFE's
                    online payment facility in{" "}
                    <strong>non-cancellable/non-refundable</strong>. Should
                    there be error or disput in the transaction, I understand
                    that I am given thirty (30) calendar days from date of
                    transaction to contact COCOLIFE Customer Care and submit
                    written notice with valid evidence to COCOLIFE Head Office.
                  </li>
                  <li>
                    I hereby understand that any charges or applicable fees
                    resulting from my request for reversal which will be
                    approved by COCOLIFE shall be for my account. In case I use
                    the card of my immediate family, any charge resulting from
                    the cardholder's request for a reversal shall be for their
                    account
                  </li>
                  <li>
                    An official receipt from COCOLIFE and Credit Card Statement
                    of Account which reflect the total amount charged shall
                    serve as proof of payment on my enrolled policies. The
                    official receipt will be sent directly to the mailing
                    address of policy holder.
                  </li>
                </ol>
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the Terms and Conditions stated above"
                onChange={handlea}
              />
            </Typography>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 4 }}>
             Close
            </Button>
          </Box>
        </Fade>
      </Modal> */}
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ mt: 2 }}>
          {" Online Credit Card Payment Terms and Conditions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ol type="1">
              <li>
                By using the COCOLIFE online payment facility, I am authorizing
                COCOLIFE to charge premium payments due to COCOLIFE from my
                credit card for my enrolled policies.
              </li>
              <li>
                COCOLIFE online payment facility also allows me to use valid
                credit cards of any of my immediate family members (spouse,
                children,parents, brothers, and sisters). In such cases, I have
                expressly authorized by the cardholder or given consent to use
                their credit card for my payment transaction under my enrolled
                policies using this facility COCOLIFE will not be held liable in
                case of dispute which may arise in the course of transaction.
              </li>
              <li>
                The payment transaction through credit crad using COCOLIFE's
                online payment facility in{" "}
                <strong>non-cancellable/non-refundable</strong>. Should there be
                error or disput in the transaction, I understand that I am given
                thirty (30) calendar days from date of transaction to contact
                COCOLIFE Customer Care and submit written notice with valid
                evidence to COCOLIFE Head Office.
              </li>
              <li>
                I hereby understand that any charges or applicable fees
                resulting from my request for reversal which will be approved by
                COCOLIFE shall be for my account. In case I use the card of my
                immediate family, any charge resulting from the cardholder's
                request for a reversal shall be for their account
              </li>
              <li>
                An official receipt from COCOLIFE and Credit Card Statement of
                Account which reflect the total amount charged shall serve as
                proof of payment on my enrolled policies. The official receipt
                will be sent directly to the mailing address of policy holder.
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ mb: 2 }}>
          <Button onClick={cancelTerms}>Cancel</Button>
          <Button onClick={acceptTerms} autoFocus>
            I agree to the terms and conditions
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Pay Online
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Stack>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Select a Policy
              </Typography>
              <Typography variant="overline">
                Choose a Policy from the Dropdown Menu
              </Typography>

              <Select
                size="small"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                //   defaultValue="Select a Policy
                value={policy}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Select a Policy</em>
                </MenuItem>
                <MenuItem value="7323233">7323233 | BOLANOS ANTHONY</MenuItem>
                <MenuItem value="3233331">3233331 | BOLANOS MARICAR</MenuItem>
              </Select>
            </Stack>
          </Paper>
          <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6">Policy Information</Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" color="text.subtitle2">
                  Policy Number
                </Typography>
                <Typography variant="h6" color="text.primary">
                  7323233
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" color="text.subtitle2">
                  Insured Name
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Bolanos, Anthony M
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" color="text.subtitle2">
                  Due Date
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Februray 2, 2006
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" color="text.subtitle2">
                  Email Address
                </Typography>
                <Typography variant="h6" color="text.primary">
                  -
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" color="text.subtitle2">
                  Pay Mode{" "}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Quarterly
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
            <Stack>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Payment Information
              </Typography>
              <Typography variant="overline">Select a Payment Type</Typography>

              <Select
                size="small"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                //   defaultValue="Select a Policy
                value={payment}
                onChange={handleChangePayment}
              >
                <MenuItem value="">
                  <em>Select a Payment Type</em>
                </MenuItem>
                <MenuItem value="Credit Card">Credit/Debit Card</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              </Select>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ fontWeight: "600" }}>
                      <TableCell align="left" sx={{ fontWeight: "600" }}>
                        Item
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "600" }}>
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Premium"
                        />
                      </TableCell>
                      <TableCell align="right">₱2,703.48</TableCell>
                    </TableRow>

                    <TableRow />
                    <TableRow
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        <FormControlLabel control={<Checkbox />} label="PDF" />
                      </TableCell>
                      <TableCell align="right">₱0.00</TableCell>
                    </TableRow>

                    <TableRow />
                    <TableRow
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        <FormControlLabel control={<Checkbox />} label="FBR" />
                      </TableCell>
                      <TableCell align="right">₱0.00</TableCell>
                    </TableRow>
                    <TableRow
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Policy Loan Interest"
                        />
                      </TableCell>
                      <TableCell align="right">₱10,503.38</TableCell>
                    </TableRow>

                    <TableRow
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" component="th" scope="row">
                        <Typography variant="subtitle2">
                          Total Amount Due
                        </Typography>
                      </TableCell>
                      <TableCell align="right">₱2,703.48</TableCell>
                    </TableRow>

                    <TableRow />
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Summary</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Please review the terms and conditions to continue with Payment
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography variant="body">Policy Number</Typography>
              <Typography variant="body">
                <strong>7323233</strong>
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography variant="body">Total</Typography>
              <Typography variant="body">
                <strong>₱2,703.48</strong>
              </Typography>
            </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the Terms & Conditions"
              checked={accepted}
              sx={{ mt: 4 }}
              onClick={handleOpen}
              
            />
          {/* <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Checkbox sx={{pl: 0}} checked={accepted}/>
          <Typography variant="body" color="text.primary">
               I accept the <Typography color="text.linkActive" onClick={handleOpen}>terms & conditions</Typography>
              </Typography>
          </Stack> */}
            {/* <Button variant="contained" onClick={handleOpen} sx={{ mt: 4 }}>
              Proceed to Payment
            </Button> */}

            <div>
              {accepted === true ? (
                <Button variant="contained" onClick={handleOpen} sx={{ mt: 4 }}>
                  Proceed to Payment
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{ mt: 4 }}
                  disabled
                >
                  Proceed to Payment
                </Button>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
