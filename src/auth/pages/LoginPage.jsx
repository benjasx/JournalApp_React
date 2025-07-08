import { Link as RouterLink } from 'react-router'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const LoginPage = () => {
    return (
        <form>
            <Typography variant='h5' sx={{ mb: 1, textAlign: 'center' }}>{'Ingresa!'}</Typography>
            <Grid xs={12} sx={{ mt: 2 }}>
                <TextField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    fullWidth
                >
                </TextField>
            </Grid>

            <Grid xs={12} sx={{ mt: 2 }}>
                <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                >
                </TextField>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid xs={12} size={6}>
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                </Grid>
                <Grid xs={12} size={6}>
                    <Button variant="contained" fullWidth size="large">
                        <Google />
                        <Typography sx={{ ml: 1 }}>Google</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end" alignItems="center">
                <Link component={RouterLink} color='inherit' to={'/auth/register'}>
                    <Typography>Crea una cuenta</Typography>
                </Link>
            </Grid>
        </form>


    )
}
