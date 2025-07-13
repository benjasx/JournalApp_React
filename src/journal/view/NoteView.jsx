import { Padding, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
  return (
    <Grid className='animate__animated animate__fadeIn animate__faster' container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid>
        <Typography fontSize={39} fontWeight='light'>28 de Agosto, 2023</Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container width='100%'>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Ingrese un Título"
          sx={{ border: 'none', mb: 1 }}
        >
        </TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          label="¿Qué sucedió en el día de hoy?"
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
        >
        </TextField>
      </Grid>
      <ImageGalery />
    </Grid>

  )
}
