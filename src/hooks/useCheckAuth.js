import { FirebaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth"
import { startLoadingNotes } from "../store/journal"


export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout())
            const { displayName, photoURL, email, uid } = user
            dispatch(login({ displayName, photoURL, email, uid }))
            dispatch(startLoadingNotes())
        })
    }, [])

    return {
        status
    }
}
