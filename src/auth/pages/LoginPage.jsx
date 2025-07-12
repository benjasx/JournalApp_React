import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useForm } from '../../hooks'
import { checkingAuthentication } from '../../store/auth'


export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'Benjasanchez175@gmail.com',
        password: '123456'
    })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({email, password});
        dispatch(checkingAuthentication())
        
    }

    const onGoogleSingnIn = () => {
        console.log('onGoogleSingnIn');
        dispatch(checkingAuthentication())
        
    }

    return (
        <form onSubmit={onSubmit}>
            <Typography variant='h5' sx={{ mb: 1, textAlign: 'center' }}>{'Ingresa!'}</Typography>
            <Grid xs={12} sx={{ mt: 2 }}>
                <TextField
                    label='email'
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                >
                </TextField>
            </Grid>

            <Grid xs={12} sx={{ mt: 2 }}>
                <TextField 
                    label='password'
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                >
                </TextField>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid xs={12} size={6}>
                    <Button type='submit' variant="contained" fullWidth>
                        Login
                    </Button>
                </Grid>
                <Grid xs={12} size={6}>
                    <Button onClick={onGoogleSingnIn} variant="contained" fullWidth size="large">
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
