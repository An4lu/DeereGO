import { Routes, Route, HashRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import './App.css'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}
