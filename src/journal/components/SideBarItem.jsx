import { TurnedInNot } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch()

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.slice(0, 17) + '...'
            : title
    }, [title])

    const activeNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={activeNote}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
