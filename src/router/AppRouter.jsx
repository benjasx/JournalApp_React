import { BrowserRouter, Navigate, Route } from "react-router"
import { Routes } from "react-router"


import { LoginPage, RegisterPage } from '../auth/pages'
import { JournalPage } from '../journal/pages/JournalPage'
import { AuthLayout } from "../auth/layout/AuthLayout"
import { JournalLayout } from "../journal/layout/JournalLayout"
import { useCheckAuth } from "../hooks"
import { CheckingAuth } from "../ui/components/CheckingAuth"


export const AppRouter = () => {

  const {status} = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas para usuarios NO autenticados (Login, Register) */}
        {/* Si el usuario está autenticado y trata de acceder a /auth/login o /auth/register, redirige a /journal */}
        <Route path="/auth/*" element={
          (status === 'auththenticated')
            ? <Navigate to="/journal" />
            : <AuthLayout /> // Si no está autenticado, renderiza el AuthLayout
        }>
          {/* Si alguien va a /auth, redirige a /auth/login */}
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Rutas para usuarios autenticados (Journal) */}
        {/* Si el usuario NO está autenticado y trata de acceder a /journal, redirige a /auth/login */}
        <Route path="/journal/*" element={
          (status === 'auththenticated')
            ? <JournalLayout /> // Si está autenticado, renderiza el JournalLayout
            : <Navigate to="/auth/login" />
        }>
          {/* Si alguien va a /journal (o /journal/algo), la página principal del journal */}
          <Route index element={<JournalPage />} />
        </Route>

        {/* Ruta comodín (catch-all) */}
        {/* Esto maneja cualquier otra ruta que no coincida con las anteriores.
                    Redirige al login si no está autenticado, o al journal si sí lo está.
                    Asegúrate de que esta sea la ÚLTIMA ruta.
                */}
        <Route path="/*" element={
          (status === 'auththenticated')
            ? <Navigate to="/journal" />
            : <Navigate to="/auth/login" />
        } />

      </Routes>
    </BrowserRouter>
  )
}