import MenuBar from "../menu/MenuBar";
import { AppBar, Box, CssBaseline, Drawer, Stack, Toolbar } from "@mui/material";
import Header from "../header/Header";

const drawerWidth = 240;

export default function Playground({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>

      <AppBar position={"fixed"}
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ><Toolbar>
        <Header/>
      </Toolbar>
      </AppBar>

      <Drawer variant="permanent"
              PaperProps={{ sx: { bgcolor: '' } }}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
              }}
      ><MenuBar/>
      </Drawer>

      <Box component={"main"} sx={{ flexGrow: 1 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
