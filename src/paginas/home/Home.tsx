import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagem";
import ModalPostagem from "../../components/postagens/modalPostagens/ModalPostagem";

function Home(){
    return(
        <>
       <div className="bg-indigo-900 w-screen flex justify-center min-h-[80vh]">
        <div className="container grid grid-cols-2 text-white">
            <div className="max-w-7xl flex flex-col items-center gap-4 justify-center py-4">
                <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                <p className="text-xl">Expresse aqui seus pensamentose opinioes</p>

                <div className="flex justify-around gap-4">
                <ModalPostagem />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                
            </div>
            </div>
            
            <div className="max-w-7xl flex  flex-col items-center justify-center">
                <img src="https://imgur.com/VpwApCU.png" 
                alt="Imagem da pagina home"
                className="w-2/3" />
            </div>
        </div>
       </div>
       <ListaPostagens/>
        </>
    );
}
export default Home;