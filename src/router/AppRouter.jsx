import { BrowserRouter, Navigate, Route } from "react-router"
import { Routes } from "react-router"

import { LoginPage, RegisterPage } from '../auth/pages'
import { JournalPage } from '../journal/pages/JournalPage'
import { AuthLayout } from "../auth/layout/AuthLayout"
import { JournalLayout } from "../journal/layout/JournalLayout"



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="journal" element={<JournalLayout/>}>
          <Route index element={<JournalPage />} />
        </Route>

        <Route path="/" element={<Navigate to={'/journal'} />} />
        <Route path="/auth" element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </BrowserRouter>
  )
}
