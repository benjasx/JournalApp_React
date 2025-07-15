
import { useSelector } from "react-redux"
import { NoteView, NothingSelectedView } from "../view/"

export const JournalPage = () => {

  const { active } = useSelector(state => state.journal)

  return (
    <>
      {active === null
        ? <NothingSelectedView />
        : <NoteView />}
    </>
  )
}
