import React, { useState } from 'react';

function AdivinaComponent() {
    const [numero, setNumero] = useState(1);
    const [sorteo, setSorteo] = useState(0);
    const [result, setResult] = useState(false);

    const sortear = () => {
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); //asigno valor por función
        setResult(true) //asigno valor por función
    }

    return (
        <div style={{ margin: 30 }}>
            {!result ?
                <div>
                    <h4>Adivina el Número del 1 al 10</h4>
                    <input type='number' value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                    <br />
                    <button onClick={() => sortear()}>SORTEAR</button>
                </div>
                :
                <>
                    <hr />
                    <h3>Usted eligió el {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3>{sorteo == numero ? "Ha Ganado!" : "Siga participando"}</h3>
                    <br />
                    <button onClick={() => {
                        setResult(false)
                        setNumero(1)
                    }}>Volver a jugar</button>

                </>
            }
        </div>
    );
}

export default AdivinaComponent;

//ejercicio
// 1- contar cuantas veces jugó, cuantas ganó y cuantas perdió
// 2- mostrar en rojo cuando pierda y en verde cuando gana
// 3- validar el ingreso a número del 1 al 10
