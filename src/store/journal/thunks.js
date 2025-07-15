import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, deleteNoteById, isSavingNewNote, noteUpdated, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from "./journalSlice"
import { fileUpload, loadNotes } from "../../helpers"
import Swal from "sweetalert2"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(isSavingNewNote())
        const { uid } = getState().auth

        const newNote = {
            title: 'Escribe el titulo de tu nota',
            body: 'Narra tu nota. Ejemplo: "Hoy fui a la playa y me divierte mucho.',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)


        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth
        if (!uid) throw new Error('El UID del usuario no existe')
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth

        const noteToFireStore = { ...note }
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(noteUpdated(note));
        dispatch(setActiveNote(note))


    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)
        console.log(photosUrls)
        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

        await deleteDoc(docRef)
        dispatch(deleteNoteById(note.id))
    }
}