import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'

function PlayVideo() {
    const [video, setVideo] = useState('');
    const [urlTemporal, setUrlTemporal] = useState('');
    
    const cargarUrl = () =>{
        setVideo(urlTemporal)
    }
    return (
        <div >
            <h3>Reproduce un video mientras juegas</h3>
            <h5>Dirección ingresada: {urlTemporal}</h5>
            <input type="text" placeholder='Ingresa la url de tu video' onChange={(e) => setUrlTemporal(e.target.value)} />
            <br /><br />
            <button onClick={cargarUrl} type='submit' value={video} > Cargar video</button>

            <ReactPlayer
            url={video}
            playing
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