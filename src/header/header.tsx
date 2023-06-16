import { AppBar, Typography, Box } from "@mui/material";
import Styles from "./header.module.css";

const Header = () => {
  return (
    <div className={Styles.Header}>
      <Box sx={{ flexGrow: 1 }} position="static">
        <AppBar>
          <div className={Styles.AppTitle}>
            <Typography>My Job App</Typography>
          </div>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
