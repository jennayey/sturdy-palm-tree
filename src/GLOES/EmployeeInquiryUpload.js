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

import { borders } from "@mui/system";

function EmployeeInquiryUpload(props) {
  const [uploadType, setUploadType] = React.useState("");

  const handleChange = (event) => {
    setUploadType(event.target.value);
  };

  return (
    <div>
     <Typography variant="h4"  color="primary" sx={{ mb: 5 }}>
        Employee Inquiry Upload
      </Typography>

      <Typography variant="h6">Uploading</Typography>
      <Divider sx={{ mt:1 }}/>

      <Box sx={{ mt:3 }}>
        

          <FormControl sx={{ my: 1,minWidth: 120 }}>
          <Typography variant="overline">Upload Type</Typography>

            <Select
              value={uploadType}
              onChange={handleChange}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >

              <MenuItem value="">
                <em>Select Upload Type</em>
              </MenuItem>
              <MenuItem value="Addition">Addition</MenuItem>
              <MenuItem value="Change in Coverage">Change in Coverage</MenuItem>
              <MenuItem value="Deletion">Deletion</MenuItem>
              <MenuItem value="Update Basic Info">Update Basic Info</MenuItem>
            </Select>
          </FormControl>
        <br />
        <Typography variant="overline">Select File (*.csv)</Typography>

        <Box
          sx={{
            border: "2px solid #e2e2e2",
            borderStyle: "dashed",
            borderRadius: "5px",
            p: 1,
            marginTop: "10px",
            py: 5,
          }}
        >
          <Stack direction="column" spacing={0.5}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={0.5}
            >
              <DeleteIcon />
              <Typography variant="h6">Drag and drop files here</Typography>
              <Typography variant="body1">or</Typography>
              <Button variant="text">Browse files</Button>
              {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                Upload file
              </Button> */}
            </Stack>
          </Stack>
        </Box>
        <Typography variant="caption" color="text.hint">
          Accepted files are CSV
        </Typography>
      </Box>
    </div>
  );
}

export default EmployeeInquiryUpload;
