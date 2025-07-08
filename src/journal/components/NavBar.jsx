import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`,
                    ml: { sm: `${drawerWidth}px` },
                }

            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid container width='100%'  direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography>JournalApp</Typography>
                    <IconButton sx={{ fontSize: 100, color: "error.main" }}>
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
