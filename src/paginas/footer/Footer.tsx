import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer(){
    const {usuario}= useContext(AuthContext)
    let component : ReactNode;
    if(usuario.token !== ""){
        component=(
    <div className="bg-indigo-900 w-screen flex justify-center">
        <div className="flex flex-col text-white">
            <h2>Blog Pessoal Adriel Martineli | Copyright C não lembro como faz</h2>
            <p className=" flex justify-center">Acesse minhas redes sociais</p>
        <ul className="flex text-1xl justify-between">
                <li>Linkedin</li>
                <li>Instagram</li>
                <li>Github</li>
                </ul>
        </div>
        </div>
        )
    };
    return(
        <>
        {component}
        </>
    );
}
export default Footer;