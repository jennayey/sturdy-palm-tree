import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import cocolife from "./assets/cocolife-horizontal.png";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import React from "react";

function PrivacyPolicy() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box sx={{ height:'100vh', backgroundColor: 'background.default' }}>
         
      <Container
        maxWidth="lg"
        sx={{ p: 2 ,}}
      >
        <Paper variant="outlined" sx={{ py: 5, px: 4, }}>
          <Stack spacing={4}>
            <Box>
              <img src={cocolife} style={{ height: "25px" }} />
            </Box>
            <Typography variant="h5">Privacy Notice</Typography>
            
            <Typography variant="body1">
            COCOLIFE upholds an individual’s data privacy rights and assures you that all your personal information
and sensitive personal information (collectively, <strong>“Personal Data”</strong>) collected by us are processed in
compliance with Republic Act No. 10173 or the Data Privacy Act of 2012 <strong>(“DPA”)</strong>, its Implementing
Rules and Regulations <strong>(“IRR”)</strong>, and the issuances of the National Privacy Commission.
          <br/><br/>
          Personal Data refers to all types of personal information, sensitive personal information and privileged
information. Personal information refers to any information, whether recorded in a material form or
not, from which the identity of an individual is apparent or can be reasonably and directly ascertained
by the entity holding the information, or when put together with other information would directly and
certainly identify an individual. Personal information includes, but is not limited to, your name, home
or business address, email address, mobile or land line phone numbers, or other contact information.
<br/><br/>
Sensitive personal information refers to personal information: (1) about an individual’s race, ethnic
origin, marital status, age, color, and religious, philosophical or political affiliations; (2) about an
individual’s health, education, genetic or sexual life of a person, or to any proceeding for any offense
committed or alleged to have been committed by such individual, the disposal of such proceedings, or
the sentence of any court in such proceedings; (3) issued by government agencies peculiar to an
individual which includes, but is not limited to, social security numbers, previous or current health
records, licenses or its denials, suspension or revocation, and tax returns; or (4) specifically established
by an executive order or an act of Congress to be kept classified.
<br/><br/>
Cocolife takes every precaution to protect your personal information. The information you submit via
this website is protected both online and offline and will only be used for your policy transactions, for
informing you of our products and other updates, and as inputs for improving our products and
services. Cocolife will hold the information securely and will not disclose it except for the above
purposes or when required by law. By submitting your Personal Data to us, you consent to the
collection, processing, use, storage, and disclosure of your Personal Data in accordance with the
aforementioned purposes.
            </Typography>

            <Typography variant="h6">General Conditions of Use</Typography>
            <Typography variant="body1">Please read the following terms and conditions before using this website or accessing any service
provided herein. You are also advised to regularly review these terms and conditions as they may
change from time to time without prior notice.
<br/><br/>
<ol type="1">
    <li>
    Cocolife maintains and operates this website and is the sole owner of all the contents,
elements, and other information appearing on this site. Duplication, public transmission,
modification, deletion, or reproduction whether in part or in full of any if the contents,
elements, and other information on this website is prohibited unless stated specifically
otherwise.
    </li>
    <li>Content and other information on this website are provided on &quot;AS IS&quot; basis. Cocolife makes no
representation and warranty, either express or implied that information on this site will be
accurate, error free, complete, and updated at all times.</li>
    <li>Cocolife reserves the right to interrupt operation, change or modify contents and other
information, or discontinue any or all elements of this website without prior notice.</li>
    <li>Cocolife assumes no responsibility for any harm or loss that may arise through the use or misuse
of content or other information appearing on this website.</li>
    <li>This website contains links to third party websites. These links are provided solely for your
convenience. While Cocolife has taken steps to ensure that it has partnered with organizations
who observe the same level of data privacy standards as Cocolife, Cocolife ultimately is not
responsible for the contents, security, and privacy practices of these linked websites.</li>

</ol>
</Typography>

<Typography variant="h6">Interactive Web Service</Typography>
<Typography variant="body1">For Cocolife sales associates and policyholders, an interactive web-based service is provided within this
site. If you are this type of user, the following supplement the general terms and conditions stated
above.
<ol type="1">
<li>
If you are a new user, make sure that the information you supply on the on the online
registration form are valid and up to date.
</li>
<li>
Cocolife reserves the right to accept or deny application for access to the interactive web
service page without prior notice.
</li>
<li>
Access to the interactive web service requires registered users to supply a username, password,
or other security measures.
</li>
<li>
Cocolife considers your username and password as your legal identification as an authorized
user and therefore, it is your responsibility to keep your username and password confidential at
all times. Cocolife assumes no responsibility to keep your username and password confidential
at all times. Cocolife assumes no responsibility for any unauthorized access to your account.
</li>
<li>
You must promptly update Cocolife in the event of any changes to the Personal Data you have
provided to us.
</li>
<li>
You must immediately notify Cocolife if you have a strong reason to believe that the
confidentiality your username and password has been compromised, or if there is, or if there
has been unauthorized use of the same.
</li>
<li>
Cocolife reserves the right to cancel or deactivate user accounts without prior notice.
</li>
<li>
Although appropriate measures are in place to secure the use of the interactive web service,
bear in mind that the Internet in general is not completely secure, and therefore, Cocolife
cannot provide an ultimate guarantee as to the privacy of all information available on the
interactive web service.
</li>

</ol>
<br/><br/>
For more information on how we handle your personal data, please review our 
<a href="https://www.cocolife.com/about-us#privacy-policy
"> Privacy Policy</a></Typography>



           </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
