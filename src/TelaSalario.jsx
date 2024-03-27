import Context from './Context';
import { useContext } from 'react';
import CalculoSalario from './CalculoSalario';

function TelaSalario() {

    const { valor_hora, setValor_hora, hora, setHora } = useContext(Context);

    return (
        <>
            <div>
                <label>Digite o valor da hora: </label>
                <input type='number' value={valor_hora} onChange={e => setValor_hora(e.target.value)} />
            </div>
            <div>
                <label>Digite a quantidade de horas trabalhadas na semana: </label>
                <input type='number' value={hora} onChange={e => setHora(e.target.value)} />
            </div>
            <CalculoSalario />
        </>
    )

}

export default TelaSalario;