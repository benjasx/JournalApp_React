import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
import { NavBar, SideBar } from "../components"

const drawerWidth = 260

export const JournalLayout = () => {
    return (
        <Box sx={{ display: "flex" }}>

            <NavBar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}
