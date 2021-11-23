<List sx={{ marginTop: `20px` }}>
{[
  "Home",
  "Enrollment",
  "Account Policy",
  "Benefit Summary",
  "Enterprise Summary",
  "Reports",
  "Maintenance",
].map((text, index) => (
  <ListItemButton key={text}>
    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <Typography variant="body2" noWrap component="div">
      <ListItemText primary={text} disableTypography="true" />
    </Typography>
  </ListItemButton>
))}
</List>