import './App.css';
// import Formulario from './components/Formulario/Formulario';
// import GeradorCPF from './components/GeradorCPF/GeradorCPF';
// import GeradorSenhas from './components/GeradorSenhas/GeradorSenha.tsx'
/*import Main from './components/Main/Main';
import Home from './components/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import View from './components/view/View';
import Header from './components/Header/Header';*/
import Votacao from './components/Votacao/Votacao';

/**
 *
 * <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/cursos" element={<Courses />} />
      </Routes>
    </Router>
 */

function App() {
  return (
    /*<Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Main />} />
        <Route path="/update/:id" element={<Main />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>*/
    <Votacao/>
  );
}

export default App;
