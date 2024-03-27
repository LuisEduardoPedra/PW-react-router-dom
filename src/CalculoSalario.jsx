import Context from './Context';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

function CalculoSalario() {

    const { setSalario, hora, valor_hora } = useContext(Context);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/privado/inicio/resultado');
    };

    const calcula = () => {
        
        let salarioCalculado = hora * valor_hora * 5;
        if (salarioCalculado <= 1302.0) {
            salarioCalculado *= 0.925;
        } else if (salarioCalculado <= 2571.29) {
            salarioCalculado *= 0.91;
        } else if (salarioCalculado <= 3856.94) {
            salarioCalculado *= 0.88;
        } else {
            salarioCalculado *= 0.86;
        }
        setSalario(salarioCalculado);
        handleNavigate();
    }

    return (<>
                <button onClick={calcula}>Calcular</button>
            </>
    )

}

export default CalculoSalario;