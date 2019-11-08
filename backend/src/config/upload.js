// Upload de imagens e multipart form
const multer = require('multer');
const path 

module.exports = {
    // Arquivos de disco, físicos
    storage: multer.diskStorage({
        // Pasta para o qual será salvo a imagem
        destination: path.resolve(__dirname,'..', '..', 'uploads'),
        filename: (req, file, callback) => {
            callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        }
    }),
}; 