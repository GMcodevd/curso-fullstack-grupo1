import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'          //Permite reproducir videos de youtube desde el browser

function PlayVideo(props) {
    const [video, setVideo] = useState(props.url);          // Así carga un video predeterminado, pero el usuario puede cambiarlo
    const [urlTemporal, setUrlTemporal] = useState('');     //Dos useState para evitar que el reproductor intente cargar cualquier entrada
    
    const cargarUrl = () =>{
        setVideo(urlTemporal)
    }
    return (
        <div >
            <h3>Podés ingresar el enlace a otro video mientras juegas</h3>
            <input type="text" placeholder='Ingresa la url de tu video' onChange={(e) => setUrlTemporal(e.target.value)} /> <br />
            <h5>Dirección ingresada: </h5>
            <h5>{urlTemporal}</h5>
            
            <button onClick={cargarUrl} type='submit' value={video} > Cargar video</button>
            <br /> <br />

            <ReactPlayer
            url={video}
            playing                 //reproducción automática
            width='100%'
            height='360px'
            controls
            ></ReactPlayer>

            {/* {video && (
            <iframe 
            src={video} 
            frameborder="0"
            allow='autoplay'
            allowFullScreen
            title= {video}>
            </iframe>)} */}
        </div>
    );
}
// const style ={
//     titulo:{
//        fontSize: '40'
//     },
//     subtitulo: {
//         fontSize: "30"
//     } 
// }
export default PlayVideo;