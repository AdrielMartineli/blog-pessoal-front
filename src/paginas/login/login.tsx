import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';


function Login() {
    const navigate = useNavigate()

    const {usuario,handleLogin, isLoading} = useContext(AuthContext)

    const [ usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(()=> {
           if(usuario.token !== ''){
            navigate("/home")
           }
    },[usuario])
    function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }
    function login(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        handleLogin(usuarioLogin)
    }
    console.log(JSON.stringify(usuarioLogin))

    return (
        <>
            
            <div className="bg-indigo-900 w-screen flex justify-center min-h-[80vh]">
            <div className="container grid grid-cols-2 text-white">
            <div className="max-w-7xl flex flex-col items-center gap-4 justify-center py-4">
                <h1 className='text-5xl font-bold text-white'>LOGIN</h1>
            </div>
            <div className="max-w-7xl flex  flex-col items-center justify-center">
            <form className='flex justify-center items-center flex-col w-1/2 gap-4'
                onSubmit={login}
            >
                <div className='flex flex-col w-full'>
                    <label className='text-xl' htmlFor="usuario">Usuário</label>
                    <input type="text"
                    id='usuario'
                    name='usuario'
                    placeholder='Usuario'
                    className='border-2 border-slate-700 rounded p-2 text-black'
                    value={usuarioLogin.usuario} 
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}/>
                </div>
                <div className='flex flex-col w-full'>
                    <label className='text-xl' htmlFor="usuario">Senha</label>
                    <input type="password"
                    id='senha'
                    name='senha'
                    placeholder='Senha'
                    className='border-2 border-slate-700 rounded p-2 text-black' 
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}/>
                </div>
                <button
                 type='submit'
                   className='rounded flex justify-center text-white bg-indigo-400
                  hover:bg-indigo-700 w-1/2 py-2'> 
                  {isLoading ?
                  <RotatingLines
                  strokeColor='white'
                  strokeWidth='5'
                  animationDuration='0.75'
                  width='24'
                  visible={true}
                  />
                  :
                    <span>Entrar</span>
                  }
                  
                  </button>
            </form>
            
            </div>

            </div>
            </div>
        </>
    );
}

export default Login;