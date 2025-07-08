import { Link as RouterLink } from 'react-router'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const RegisterPage = () => {
    return (


        <form>
            <Typography variant='h5' sx={{ mb: 1, textAlign: 'center' }}>{'Registrate!'}</Typography>
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

            <Grid xs={12} sx={{ mt: 2 }}>
                <TextField
                    label="Confirmar Contraseña"
                    type="password"
                    placeholder="Contraseña-Confirmar"
                    fullWidth
                >
                </TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid xs={12} size={12}>
                    <Button variant="contained" fullWidth>
                        Register
                    </Button>
                </Grid>

            </Grid>
            <Grid container direction="row" justifyContent="end" alignItems="center">
                <Link component={RouterLink} color='inherit' to={'/auth/login'}>
                    <Typography>¿Ya tienes una cuenta? Ingresar</Typography>
                </Link>
            </Grid>
        </form>


    )
}
