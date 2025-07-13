import { Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router';


export const AuthLayout = () => {
    return (
        <Grid

            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                className='box-shadow'
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}>


                <Outlet />
            </Grid>

        </Grid>

    )
}