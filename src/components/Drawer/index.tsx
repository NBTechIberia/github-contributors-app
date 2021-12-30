import {
  Divider,
  Drawer as MuiDrawer,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTE_DASHBOARD, ROUTE_SETTINGS } from "../../routers/types";

const drawerWidth = 240;

export const Drawer: React.FC = () => {
  const location = useLocation();
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <MenuList>
          <NavLink
            to={ROUTE_DASHBOARD}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem selected={location.pathname === ROUTE_DASHBOARD}>
              <ListItemText primary="Dashboard" />
            </MenuItem>
          </NavLink>
          <Divider />
          <Link
            to={ROUTE_SETTINGS}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem selected={location.pathname === ROUTE_SETTINGS}>
              <ListItemText primary="Settings" />
            </MenuItem>
          </Link>
          <Divider />
        </MenuList>
      </Box>
    </MuiDrawer>
  );
};
