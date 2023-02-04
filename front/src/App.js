import Container from 'react-bootstrap/esm/Container';
import { Outlet, Route, Routes } from 'react-router-dom';
import Produits from './Composants/Home/ListProduits';
import Menu from './Composants/Menu/Menu';
import { AuthProvider } from './Cp/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        <Menu />
        <Container>
          <Outlet />
          {/*-----------------router---------------*/}
          <Routes>
            <Route path='/' element={<Produits />} />
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
