// Testing Script for BD
// Serves to check if BD is UP
import mongoose from 'mongoose';

async function testConnection() {
//Can directly test connection using uri, ONLY FOR TESTING PURPOSES
  const uri = null;

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
}

testConnection();
