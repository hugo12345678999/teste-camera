const video = document.getElementById('camera');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        // Envie o stream para o servidor usando WebRTC ou WebSockets.
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
    }
}

startCamera();
