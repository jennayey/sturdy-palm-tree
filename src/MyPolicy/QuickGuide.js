import Typography from "@mui/material/Typography";
import React from "react";

export default function QuickGuide() {
  return (
    <div>
      <Typography variant="h4" color="text.primary" sx={{ mb: 5 }}>
        Quick Guide
      </Typography>
      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        Group Life Online Enrollment System
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
        Once you enter the portal, you may now do the following:
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 5}}>
        <ul type="1">
          <li>Change your password</li>
          <li>Manage Beneficiaries</li>
          <ul>
            <li>Confirm the re-enrollmet of your existing beneficiaries</li>
            <li>Cancel your existing beneficiaries</li>
            <li>Change beneficiaries</li>
            <li>Enroll Additional beneficiaries</li>
          </ul>
          <li>Change account profile</li>
          <li>View your policy benefits</li>

        </ul>
      </Typography>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
       Changing your password
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
        If you want to change your password, follow the steps below
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 5}}>
        <ul type="1">
          <li>Go to User Profile</li>
          <li>Go to Change Password Section</li>
          <ul>
            <li>Enter your existing password</li>
            <li>Enter your new password</li>
            <li>Re-enter your new password</li>
            <li>Save your changes</li>
          </ul>
          <li>Wait for the confirmation email.</li>

        </ul>
      </Typography>
    </div>
  );
}
