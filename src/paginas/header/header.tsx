import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
function Header(){
    const navigate = useNavigate()
   const {handleLogout} = useContext(AuthContext)

    function logout(){
        handleLogout()
        alert('O usuário foi desconectado com sucesso!')
        navigate('/login')
    }
return(
    <>
    <div className="bg-indigo-900 w-screen flex justify-center">
        <div className="container grid grid-cols-2 text-white">
        <h1 className="text-5xl font-bold text-white">Blog Pessoal</h1>
        <div>
            <ul className="flex text-1xl justify-between">
                <li className='hover:underline'><Link to='/login' className='hover:underline'>Login</Link></li>
                <li className='hover:underline'><Link to='/home' className='hover:underline'>Home</Link></li>
                <li className='hover:underline'><Link to='/postagens' className='hover:underline'>Postagens</Link></li>
                <li className='hover:underline'><Link to='/temas' className='hover:underline'>Temas</Link></li>
                <li className='hover:underline'><Link to='/cadastroTema' className='hover:underline'>Cadastrar Temas</Link></li>
                <li className='hover:underline'>Perfil</li>
                <li><Link to="/login" onClick={logout}> Sair</Link></li>
            </ul>
        </div>
        </div>
    </div>
    </>
)
}
export default Header;