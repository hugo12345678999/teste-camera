function createCameraElement(stream) {
    const video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;
    video.playsInline = true;
    document.getElementById('cameras').appendChild(video);
}

// Aqui você deve se conectar ao WebSocket ou WebRTC para receber os streams
// e exibir no elemento de vídeo usando createCameraElement(stream).
