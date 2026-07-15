import { useState } from "react";

// Questão 3
function Contado(){
    const[numero, setNumero] = useState(0);

    function aumenta(){
        setNumero(numero+1);
    }

    function diminuir(){
        setNumero(numero-1);
    }

    function zera(){
        setNumero(0);
    }

    return(
        <div>
            <h2>Contado</h2>
            <p>{numero}</p>
            <button onClick={diminuir}>-1</button>
            <button onClick={zera}>0</button>
            <button onClick={aumenta}>+1</button>
        </div>
    );
}

export default Contado;