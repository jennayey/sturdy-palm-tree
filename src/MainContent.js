
import Box from "@mui/material/Box";
function MainContent (props) {
    return (
<Box
          component="main"
          sx={{
            height: "100%",
            flexGrow: 1,
            py: 5,
            px: 3,
            width: "100%",
            marginTop:"50px" 
          }}
        >
         {props.screen}
        </Box>

)}

export default MainContent;