import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active : {
    //     id : 'ABC123',
    //     title : '',
    //     body : '',
    //     date : 1234567,
    //     imageUrls : [], //     messageSaved :    messageSaved :    messageSaved : '',
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        desactivarNota: (state) => {
            state.active = null
        },
        isSavingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload

        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        noteUpdated: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout: (state) => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    desactivarNota,
    isSavingNewNote,
    noteUpdated,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
} = journalSlice.actions
