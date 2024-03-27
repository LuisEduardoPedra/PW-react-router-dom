import { useNavigate } from "react-router-dom";

function TelaInicial(){

    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/privado/inicio/cadastro');
    };

    return (
        <button onClick={handleNavigate}>Iniciar</button>
    )
}

export default TelaInicial;
