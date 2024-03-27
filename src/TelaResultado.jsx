import Context from './Context';
import { useContext } from 'react';

function TelaResultado() {

    const { salario } = useContext(Context);

    const salFormatado = salario.toFixed(2);

    return (
        <>
            <h1>Resultado</h1>
            <h3>Salario Liquido : R${salFormatado}</h3>
        </>
    )
}

export default TelaResultado