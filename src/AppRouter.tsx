import { HashRouter, Route, Routes } from 'react-router-dom'
import { DashboardAdm } from './pages/Admin/DashboardAdm'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Rebocador/Dashboard'
import { Entregas } from './pages/Rebocador/Entregas'
import { Perfil } from './pages/Rebocador/Perfil'
import { globalStyles } from './styles'
import { LayoutRebocador } from './layouts/LayoutRebocador'

globalStyles()

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<DashboardAdm />} />

        <Route path='rebocador/*' element={
          <LayoutRebocador>
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="entregas" element={<Entregas />} />
              <Route path="perfil" element={<Perfil />} />
            </Routes>
          </LayoutRebocador>
        } />
      </Routes>
    </HashRouter >
  )
}
