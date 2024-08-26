import { Routes, Route, HashRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { globalStyles } from './styles'

globalStyles()

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}
