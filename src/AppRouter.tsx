import { HashRouter, Route, Routes } from 'react-router-dom'
import { LayoutAdmin } from './layouts/LayoutAdmin'
import { LayoutRebocador } from './layouts/LayoutRebocador'
import { DashboardAdmin } from './pages/Admin/DashboardAdmin'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Rebocador/Dashboard'
import { Entregas } from './pages/Rebocador/Entregas'
import { Perfil } from './pages/Rebocador/Perfil'
import { globalStyles } from './styles'
import { PrivateRoute } from './components/PrivateRoute'
import { AuthProvider } from './contexts/AuthContext'

globalStyles()

export const AppRouter = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route element={<LayoutAdmin />}>
              <Route path="adm/home" element={<DashboardAdmin />} />
            </Route>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route element={<LayoutRebocador />}>
              <Route path="rebocador/home" element={<Dashboard />} />
              <Route path="rebocador/entregas" element={<Entregas />} />
              <Route path="rebocador/perfil" element={<Perfil />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}
