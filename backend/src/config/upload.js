// Upload de imagens e multipart form
const multer = require('multer');
const path = require('path');

module.exports = {
    // Arquivos de disco, físicos
    storage: multer.diskStorage({
        // Pasta para o qual será salvo a imagem
        destination: path.resolve(__dirname,'..', '..', 'uploads'),
        // Nome para o arquivo de destino
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname);
            callback(null, `${name}-${Date.now()}${path.extname(ext)}`);
        }
    })
}; 