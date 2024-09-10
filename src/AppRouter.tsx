import { HashRouter, Route, Routes } from 'react-router-dom';
import { LayoutAdmin } from './layouts/LayoutAdmin';
import { LayoutRebocador } from './layouts/LayoutRebocador';
import { DashboardAdmin } from './pages/Admin/DashboardAdmin';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Rebocador/Dashboard';
import { Entregas } from './pages/Rebocador/Entregas';
import { Perfil } from './pages/Rebocador/Perfil';
import { globalStyles } from './styles';
import { AuthProvider } from './contexts/Auth/AuthContext'; // Certifique-se de usar o AuthProvider corretamente
import RequireAuth from './contexts/Auth/RequireAuth'; // Certifique-se de que o RequireAuth está correto

globalStyles();

export const AppRouter = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Login />} />

          <Route path="adm/*" element={
            <RequireAuth>
              <LayoutAdmin>
                <Routes>
                  <Route path="home" element={<DashboardAdmin />} />
                </Routes>
              </LayoutAdmin>
            </RequireAuth>
          } />

          <Route path="rebocador/*" element={
            <RequireAuth>
              <LayoutRebocador>
                <Routes>
                  <Route path="home" element={<Dashboard />} />
                  <Route path="entregas" element={<Entregas />} />
                  <Route path="perfil" element={<Perfil />} />
                </Routes>
              </LayoutRebocador>
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
};
