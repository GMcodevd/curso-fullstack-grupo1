import React, { useState } from 'react';
import PlayVideo from './ejercicio2-video';

function AdivinaComponent2() {
    const [numero, setNumero] = useState(1);
    const [sorteo, setSorteo] = useState(0);
    const [result, setResult] = useState(false);
    const [intentos, setIntentos] = useState(0);
    const [win, setWin] = useState(0)
    const [lose, setLose] = useState(0)

    const contador = () => {
        setIntentos(intentos + 1)       //función para contar intentos
    }
    const victorias = () => {
        setWin(win + 1);                //Para mostrar los aciertos

    }
    const fallos = () => {
        setLose(lose + 1);              //Para mostrar los fallos
    }
    const iniciarJuego = () => {
        if (numero < 1 || numero > 10) {                             //Restringir el input de 1 a 10
            alert("Por favor, ingresa un número entre 1 y 10")
        }
        else {
            sortear();
        }
    }

    const sortear = () => {
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); //asigno valor por función
        setResult(true); //asigno valor por función
        contador(); // llamo a la función contador en cada sorteo

        if (parseInt(numero) === parseInt(winner)) { // si hay acierto llamo al contador de victorias o al de derrotas
            victorias();
        }
        else {
            fallos();
        }
    }

    const esGanador = parseInt(numero) === sorteo;
    const estiloResultado = esGanador ? style.ganador : style.perdedor;     //Para que los números también indiquen el acierto o error

    return (
        <div style={style.videojuego}>
            <div style={style.juego}>
                {!result ?
                    <div>
                        <h4>Adivina el Número del 1 al 10</h4>
                        <input type='number' value={numero} onChange={(e) => setNumero(e.target.value)} min={1} max={10}></input>
                        <br /><br />
                        <button onClick={() => iniciarJuego()}>SORTEAR</button>
                    </div>
                    :
                    <>
                        <hr />
                        <h3>
                            Usted eligió el<span style={estiloResultado}> {numero} </span>
                        </h3>
                        <h3>
                            Salió el número:<span style={estiloResultado}> {sorteo}</span>
                        </h3>
                        <h5>Número de intentos: {intentos}</h5>
                        <h5>Aciertos: {win}</h5>
                        <h5>Fallos: {lose}</h5>
                        <div>
                            {sorteo === numero ?
                                <h3 style={style.ganador}>"Felicitaciones!! Has Ganado!"</h3>
                                :
                                <h3 style={style.perdedor}>"Intento fallido... Siga participando"</h3>}
                        </div>
                        <br />
                        <button style={{width: '80px'}} onClick={() => {
                            setResult(false)
                            setNumero(1)
                        }} >Volver a jugar</button>

                    </>
                }
            </div>
            <div style={style.video}>
                <PlayVideo url="https://www.youtube.com/watch?v=PaFHwTjy1yE" />     {/* Agrego un video por props */}
            </div>
        </div>
    );
}
const style = {
    ganador: {
        color: "green"
    },
    perdedor: {
        color: "red"
    },
    videojuego: {
        margin: 30,
        display: 'flex',
        gap: '50px',
        backgroundColor: '#eee'
        
    },
    video: {
        flex: 1,
    },
    juego:{
        flex: 1,
        maxWidth: '40%',
        marginLeft: '100px'
    }
}

export default AdivinaComponent2;

//ejercicio
// 1- contar cuantas veces jugó, cuantas ganó y cuantas perdió
// 2- mostrar en rojo cuando pierda y en verde cuando gana
// 3- validar el ingreso a número del 1 al 10
