import Container from 'react-bootstrap/esm/Container';
import { Outlet, Route, Routes } from 'react-router-dom';
import Produits from './Composants/Home/ListProduits';
import Menu from './Composants/Menu/Menu';
import Auth from './Cp/auth';
import { AuthProvider } from './Cp/AuthContext';
import ProtectedRoutes from './Cp/protectedRoutes';
import ManageProd from './Cp/manageProd';
import Register from './Cp/register';
import Accueil from './Cp/Home';

function App() {
  return (
    <AuthProvider>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<Accueil />} />
        </Routes>
        <Container>
          <Outlet />
          {/*-----------------router---------------*/}
          <Routes>
            
            <Route path='/login' element={<Auth />} />
            <Route path='/register' element={<Register />} />
            <Route path='/produit' element={<Produits />} />
            {/**-------------------Route protegé----------------------*/}
            <Route element={<ProtectedRoutes/>} >
              <Route path='/manageProd' element={<ManageProd />} />
            </Route>
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
