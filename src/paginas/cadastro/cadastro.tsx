import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { useNavigate } from 'react-router-dom';


function Cadastrar() {

    const navigate = useNavigate()

const [confirmaSenha, setConfirmaSenha] = useState<string>('');
    const [usuario,setUsuario] = useState<Usuario>({
        id: 0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
    })

useEffect(()=>{
    if(usuario.id !== 0){
        retornar();
    }
})

function retornar(){
    navigate('/login')
}

function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
}

function handleConfirmaSenha(e:ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
    console.log(confirmaSenha);
}

async function cadastrarNovoUsuario(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
        try{
            await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
            alert('Usuario cadastrado com sucesso!');
        }catch(error){

            alert('Erro ao cadastrar o usuário!')
        }
    }else{
        alert("Dados estão inconsistentes! Verifique os dados do usuário.");
        setUsuario({...usuario, senha:''});
        setConfirmaSenha('');
    }
}

console.log(JSON.stringify(usuario));
    return (
        <>
            
            <div className="bg-indigo-900 w-screen flex justify-center min-h-[80vh]">
            <div className="container grid grid-cols-2 textblack">
            <div className="max-w-7xl flex flex-col items-center gap-4 justify-center py-4">
                <h1 className='text-5xl font-bold text-white'>CADASTRAR</h1>
            </div>
            <form className='flex justify-center items-center flex-col w-2/3 gap-3'
            onSubmit={cadastrarNovoUsuario}
            >
                <div className='flex flex-col w-full'>
                    <label htmlFor="nome" className='text-white'>Nome</label>
                    <input 
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className='border-2 border-slate-950 rounded p-2'
                     value={usuario.nome}
                     onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}/>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="usuario" className='text-white'>Usuario</label>
                    <input 
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="Usuario"
                    className='border-2 border-slate-950 rounded p-2' 
                    value={usuario.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="foto" className='text-white'>Foto</label>
                    <input 
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    className='border-2 border-slate-950 rounded p-2' 
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="senha" className='text-white'>Senha</label>
                    <input 
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className='border-2 border-slate-950 rounded p-2' 
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="confirma_senha" className='text-white'>Confirmar Senha</label>
                    <input 
                    type="password"
                    id="confirma_senha"
                    name="confirma_senha"
                    placeholder="Confirmar Senha"
                    className='border-2 border-slate-950 rounded p-2' 
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=> handleConfirmaSenha(e)}
                    />
                </div>
                <div className='flex justify-around w-full gap-8'>
                    <button className='rounded text-white bg-red-400
                            hover:bg-red-700 w-1/2 py-2'
                            onClick={retornar}>
                                Cancelar
                            </button>
                            <button
                                type='submit'
                                className='rounded text-white bg-indigo-400
                                hover:bg-indigo-700 w-1/2 py-2'
                                > Confirmar</button>
                </div>
            </form>

            </div>
            </div>
        </>
    );
}

export default Cadastrar;