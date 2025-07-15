import { useDispatch, useSelector } from "react-redux"
import { AddOutlined, StarOutline } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { startNewNote } from "../../store/journal"

export const NothingSelectedView = () => {
    const {isSaving} = useSelector(state => state.journal)

    const dispatch = useDispatch()
    
    const onCkickNewNote = () => {
        dispatch(startNewNote())
    }
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
                    Selecciona o crea una entrada
                </Typography>
            </Grid>
            <IconButton
            disabled={isSaving}
            onClick={onCkickNewNote}
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
