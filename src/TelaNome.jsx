import Context from './Context';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

function TelaNome (){

    const { nome, setNome, telefone, setTelefone } = useContext(Context);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/privado/inicio/horas');
    };

    return(
        <>
            <div>
                <label>Digite seu nome:</label>
                <input type='text' value={nome} onChange={ e => setNome(e.target.value)}/>
            </div>
            <div>
                <label>Digite seu telefone:</label>
                <input type='text' value={telefone} onChange={ e => setTelefone(e.target.value)}/>
            </div>
            <button onClick={handleNavigate}>Enviar</button>
        </>
    )

}
export default TelaNome;
