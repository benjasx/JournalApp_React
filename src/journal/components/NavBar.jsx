import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth"
import { desactivarNota } from "../../store/journal/journalSlice"


export const NavBar = ({ drawerWidth }) => {
    const dispatch = useDispatch()

    const onlogout = () => {
        dispatch(startLogout())
    }

    const onHome = () => {
        dispatch(desactivarNota())
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
                    <button
                        onClick={onHome}
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'white' }}>
                        <Typography>JournalApp</Typography>
                    </button>
                    <IconButton color="error" onClick={onlogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
