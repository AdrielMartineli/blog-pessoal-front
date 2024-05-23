import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './paginas/home/Home'
import Footer from './paginas/footer/Footer'
import Header from './paginas/header/header'
import Login from './paginas/login/login'
import Cadastrar from './paginas/cadastro/cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTema/FormularioTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
          <div className='min-h-[80vh]'>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App;


