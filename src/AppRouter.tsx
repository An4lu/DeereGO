import { HashRouter, Route, Routes } from 'react-router-dom'
import { LayoutAdmin } from './layouts/LayoutAdmin'
import { LayoutRebocador } from './layouts/LayoutRebocador'
import { DashboardAdmin } from './pages/Admin/DashboardAdmin'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Rebocador/Dashboard'
import { Entregas } from './pages/Rebocador/Entregas'
import { Perfil } from './pages/Rebocador/Perfil'
import { globalStyles } from './styles'

globalStyles()

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="adm/*" element={
          <LayoutAdmin>
            <Routes>
              <Route path='home' element={<DashboardAdmin />} />
            </Routes>
          </LayoutAdmin>
        } />

        <Route path='rebocador/*' element={
          <LayoutRebocador>
            <Routes>
              <Route path="home" element={<Dashboard />} />
              <Route path="entregas" element={<Entregas />} />
              <Route path="perfil" element={<Perfil />} />
            </Routes>
          </LayoutRebocador>
        } />
      </Routes>
    </HashRouter >
  )
}
