import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
    displayName: '',
    email: '',
    password: '',
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe llevar un @'],
    password: [(value) => value.length >= 6, 'Password debe de tener mas de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es requerido']
}



export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations)

    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted(true)
        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <>
            {/* <h1>IsFormValid: {isFormValid ? 'valido' : 'incorrecto'}</h1> */}
            <form onSubmit={onSubmit }  className= 'animate__animated animate__fadeIn animate__faster' >
                <Typography variant='h5' sx={{ mb: 1, textAlign: 'center' }}>{'Crea una cuenta!'}</Typography>
                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="nombre"
                        type="text"
                        placeholder="nombre"
                        fullWidth
                        name='displayName'
                        value={displayName}
                        onChange={onInputChange}
                        error={!!displayNameValid && formSubmitted}
                        helperText={displayNameValid}
                    >
                    </TextField>
                </Grid>
                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        error={!!emailValid && formSubmitted}
                        helperText={emailValid}
                    >
                    </TextField>
                </Grid>

                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        fullWidth
                        name='password'
                        value={password}
                        onChange={onInputChange}
                        error={!!passwordValid && formSubmitted}
                        helperText={passwordValid}
                    >
                    </TextField>
                </Grid>

                {/* <Grid xs={12} sx={{ mt: 2 }}>
                <TextField
                    label="Confirmar Contraseña"
                    type="password"
                    placeholder="Contraseña-Confirmar"
                    fullWidth
                >
                </TextField>
            </Grid> */}
                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid
                        xs={12}
                        size={12}
                        display={!!errorMessage ? '' : 'none'}
                    >
                        <Alert severity='error'>
                            {errorMessage}
                        </Alert>
                    </Grid>
                    <Grid xs={12} size={12}>
                        <Button disabled={isCheckingAuthentication} type='submit' variant="contained" fullWidth>
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
        </>


    )
}
