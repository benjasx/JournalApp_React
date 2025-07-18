import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
import { NavBar, SideBar } from "../components"

const drawerWidth = 260

export const JournalLayout = () => {
    return (
        <Box sx={{ display: "flex" }}  className= 'animate__animated animate__fadeIn animate__faster' >

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
