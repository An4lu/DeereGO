import { HashRouter, Route, Routes } from 'react-router-dom'
import { DashboardAdm } from './pages/Admin/DashboardAdm'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Rebocador/Dashboard'
import { globalStyles } from './styles'

globalStyles()

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rebocador" element={<Dashboard />} />
        <Route path="/admin" element={<DashboardAdm />} />
      </Routes>
    </HashRouter>
  )
}
