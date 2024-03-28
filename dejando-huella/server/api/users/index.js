import model from "~~/server/models/user";
import { readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
    if (event.req.method === 'POST') {
        const body = await readBody(event); // Correctamente capturando el cuerpo de la solicitud.
        console.log('Received form data:', body); // Inspeccionar el objeto recibido.

        try {
            // Asegurarse de que se crea y guarda un nuevo usuario correctamente.
            const newUser = await new model(body).save(); // Guardar el nuevo usuario en la base de datos.
            return { message: 'Author created', user: newUser }; // Devolver una respuesta exitosa con el usuario creado.
        } catch(err) {
            // Manejar cualquier error que ocurra durante la creación del usuario.
            throw createError({ statusCode: 500, message: err.message });
        }
    } else if (event.req.method === 'GET') {
        // Mantener la lógica GET para listar usuarios.
        try {
            const users = await model.find(); // Obtener todos los usuarios.
            return users; // Devolver la lista de usuarios.
        } catch(err) {
            // Manejar cualquier error que ocurra al listar los usuarios.
            throw createError({ statusCode: 500, message: err.message });
        }
    } else {
        // Si el método HTTP no es ni POST ni GET, devolver un error de método no permitido.
        throw createError({ statusCode: 405, message: 'Method Not Allowed' });
    }
});
