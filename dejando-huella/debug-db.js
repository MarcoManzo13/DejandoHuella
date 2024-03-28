import mongoose from 'mongoose';

async function testConnection() {
  // Reemplaza <usuario>, <contraseña> y <nombre-de-tu-base-de-datos> con tus credenciales reales
  const uri = 'mongodb+srv://jp:root@playground1.xa92lcc.mongodb.net/';

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
}

testConnection();
