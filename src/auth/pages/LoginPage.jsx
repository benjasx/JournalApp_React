import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLogingWithEmailPassword } from '../../store/auth'


const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {


    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth)

    const { email, password, onInputChange } = useForm(formData)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLogingWithEmailPassword({ email, password }))

    }

    const onGoogleSingnIn = () => {
        console.log('onGoogleSingnIn');
        dispatch(startGoogleSignIn())

    }

    return (
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster' >
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
            <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
                <Grid
                    xs={12}
                    size={12}

                >
                    <Alert severity='error'>
                        {errorMessage}
                    </Alert>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid xs={12} size={6}>
                    <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth>
                        Login
                    </Button>
                </Grid>
                <Grid xs={12} size={6}>
                    <Button disabled={isAuthenticating} onClick={onGoogleSingnIn} variant="contained" fullWidth size="large">
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
