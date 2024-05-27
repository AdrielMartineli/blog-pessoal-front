import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormularioPostagem from './components/postagens/formularioPostagens/FormularioPostagem'
import ListaPostagem from './components/postagens/listaPostagens/ListaPostagem'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import FormularioTema from './components/temas/formularioTema/FormularioTema'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import { AuthProvider } from './contexts/AuthContext'
import Cadastrar from './paginas/cadastro/cadastro'
import Footer from './paginas/footer/Footer'
import Header from './paginas/header/header'
import Home from './paginas/home/Home'
import Login from './paginas/login/login'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
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
              <Route path="/postagens" element={<ListaPostagem />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App;


