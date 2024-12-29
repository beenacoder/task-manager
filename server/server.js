// Importar dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const tasksRoutes = require('./src/routes/tasks.routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./src/documentations/swagger');
const handlerError = require('./src/middlewares/handlerError');


// Crear la aplicación Express
const app = express();



// Middlewares
app.use(cors());
app.use(express.json());

connectDB();


// Rutas base
app.use('/api', tasksRoutes);
// Ruta de la documentación Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Middleware de manejo de errores
app.use(handlerError);


// Escuchar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));