//server/plugins/aws_s3_Connection.js
import AWS from 'aws-sdk';

// Credentials for S3 bucket connection
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

export const uploadToS3 = (file, filename) => {
  // Configura tus parámetros de carga aquí
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: file,
    ACL: 'public-read', // Si quieres que sea accesible públicamente
  };

  return s3.upload(params).promise(); // Promise as it is asynchronous
};

// Puedes agregar más funciones según sea necesario, como borrar archivos, etc.
