import React, { useContext, useEffect, useState } from 'react';
import CardTemas from '../cardTemas/CardTemas';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';
import { toastAlerta } from '../../../utils/ToastAlerta';

function ListaTemas() {
  const navigate = useNavigate()

  const [temas, setTemas] = useState<Tema[]>([])
  
  const {usuario, handleLogout} = useContext(AuthContext)

  const token = usuario.token 

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
        toastAlerta('O token expirou, favor logar novamente',"info")
        handleLogout()
      }
    }
  }
useEffect(()=>{
    if (token === '') {
      toastAlerta('Voce precisa estar logado',"info")
        navigate('/login')
    }
}, [token])
  
useEffect(()=>{
    buscarTemas()
}, [temas.length])
  return (
    <>
    {temas.length ===0 &&(
      <DNA
      visible={true}
      height="200"
      width="200"
      ariaLabel='dna-loading'
      wrapperStyle={{}}
      wrapperClass='dna-wrapper mx-auto'
      />
    )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <>
                { temas.map((tema)=>(
                   <> 
                   <CardTemas key={tema.id} tema={tema} />
                   </>
                ) ) }
                </>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;