
import Box from "@mui/material/Box";

function MainContent (props) {
    return (
<Box
          component="main"
          sx={{
            height: "100%",
            flexGrow: 1,
            pt: {xs:5},
            mt: 5,
            px: {sm: 2, lg:3},
            width: "100%",
          }}
        >


         {props.screen}
        </Box>

)}

export default MainContent;