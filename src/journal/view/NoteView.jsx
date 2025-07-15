import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css'

export const NoteView = () => {

  const dispatch = useDispatch()
  const { active: nota, messageSaved, isSaving } = useSelector(state => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(nota)

  /*  useEffect(() => {
     dispatch(setActiveNote(formState))
   }, [formState]) */

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota Actualizada', messageSaved, 'success');
    }
  }, [messageSaved])

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString()
  })

  const onSaveNote = () => {
    dispatch(startSaveNote(formState))
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files))
  }
  const fileInputRef = useRef()

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid className='animate__animated animate__fadeIn animate__faster' container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid>
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>
      <Grid>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
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
          name='title'
          value={title}
          onChange={onInputChange}
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
          name='body'
          value={body}
          onChange={onInputChange}
        >
        </TextField>
      </Grid>
      <Grid container justifyContent='end'>
        <Button
          color="error"
          onClick={onDelete}
          sx={{mt:2}}
        >
          <DeleteOutline /> Borrar
        </Button>
      </Grid>
      {nota.imageUrls && <ImageGalery images={nota.imageUrls} />}
      
    </Grid>

  )
}
