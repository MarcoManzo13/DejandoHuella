// Importa las dependencias usando la sintaxis de módulos ES
import { S3Client} from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { defineEventHandler } from 'h3';

// Inicializa el cliente de S3 con la nueva sintaxis
const s3Client = new S3Client({
  region: process.env.AWS_REGION, // Asegúrate de configurar tus variables de entorno
  credentials: {  
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Define el almacenamiento multerS3 con la configuración de AWS SDK v3
const storage = multerS3({
  s3: s3Client,
  bucket: process.env.AWS_BUCKET_NAME,
  acl: 'public-read',
  key: function (req, file, cb) {
    cb(null, `${Date.now().toString()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file');

// Usa export default para exportar el manejador del evento
export default defineEventHandler((event) => new Promise((resolve, reject) => {
  // Ejecuta la carga de archivos
  upload(event.req, event.res, function (error) {
    if (error) {
      // Maneja cualquier error que ocurra durante la carga
      reject(error);
    } else {
      // Resuelve la promesa si la carga fue exitosa
      resolve({ data: 'File uploaded successfully.' });
    }
  });
}));
