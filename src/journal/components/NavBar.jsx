import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth"


export const NavBar = ({ drawerWidth }) => {
    const dispatch = useDispatch()
    const onlogout = () => {
        dispatch(startLogout())
    }

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
                    <MenuOutlined />
                </IconButton>
                <Grid container width='100%' direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography>JournalApp</Typography>
                    <IconButton color="error" onClick={onlogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
