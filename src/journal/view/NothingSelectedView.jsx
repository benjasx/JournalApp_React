import { AddOutlined, StarOutline } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 3 }}
        >
            <Grid >
                <StarOutline sx={{ fontSize: 100, color: "white" }} />
            </Grid>
            <Grid>
                <Typography variant="h5" sx={{ color: 'white' }}>
                    Selecciona un registro
                </Typography>
            </Grid>
            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: 'error.main',
                    position: 'fixed',
                    bottom: 50,
                    right: 50,
                    ':hover': {
                        backgroundColor: 'error.dark',
                        opacity: 0.9,

                    }
                }}
            >
                <AddOutlined />
            </IconButton>
        </Grid>
    )
}
