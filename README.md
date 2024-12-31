
# Gestión de Tareas - Proyecto Full Stack

Este es un proyecto de gestión de tareas que permite a los usuarios crear, editar, eliminar y marcar tareas como completadas. El proyecto está construido utilizando React.js en el frontend y un backend con Node.js y Express.

## Enlace a la aplicación desplegada

Puedes acceder a la aplicación desplegada en el siguiente enlace:  
[Enlace a la Aplicación Desplegada](https://task-manager-gamma-gold-52.vercel.app/)

## Pasos para instalar y ejecutar el proyecto localmente

### 1. Clonar el repositorio

Primero, clona el repositorio a tu máquina local usando Git:

```bash
git https://github.com/beenacoder/task-manager.git
```

### 2. Configuración del backend

Para configurar el backend, sigue estos pasos:

1. Navega a la carpeta del backend:

```bash
cd server
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

```env
MONGO_URI=tu_uri_de_mongodb_atlas
PORT=8080
JWT_SECRET=tu_clave_secreta_para_jwt
```

4. Inicia el servidor backend:

```bash
npm start
```

El backend estará corriendo en `https://task-manager-3nmq.onrender.com/`.

### 3. Configuración del frontend

Para configurar el frontend, sigue estos pasos:

1. Navega a la carpeta del frontend:

```bash
cd client
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará corriendo en `https://task-manager-gamma-gold-52.vercel.app/`.

## Detalles de configuración

A continuación, se describen las variables de entorno necesarias para el funcionamiento adecuado del proyecto:

### Variables de entorno

#### En el backend:

- **DATABASE_URI**: La URI de tu base de datos MongoDB (puedes obtenerla desde [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
- **PORT**: El puerto en el que el servidor backend estará escuchando (por defecto es `5000`).
- **JWT_SECRET**: Una clave secreta para generar y verificar los tokens JWT.


## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
gestion-tareas/
│
├── backend/                  # Lógica del servidor y API (Node.js + Express)
│   ├── models/               # Modelos de la base de datos
│   ├── routes/               # Rutas del servidor
│   ├── controllers/          # Lógica de los controladores
│   ├── .env                  # Variables de entorno del backend
│   └── server.js             # Archivo principal del servidor
│
├── frontend/                 # Interfaz de usuario (React.js)
│   ├── components/           # Componentes React
│   ├── hooks/                # Hooks personalizados
│   ├── services/             # Servicios para conectarse al backend
│   ├── App.js                # Componente principal
│   ├── index.js              # Punto de entrada de React
│   └── tailwind.config.js    # Configuración de Tailwind CSS
│
├── .gitignore                # Archivos y carpetas a ignorar por Git
├── README.md                 # Este archivo
└── package.json              # Dependencias y scripts
```

## Tecnologías utilizadas

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB (MongoDB Atlas)
- **Autenticación**: JWT (JSON Web Token)
- **Otros**: React-Redux, React Icons

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, puedes crear un "Pull Request" con tus cambios.

---

**¡Gracias por usar el proyecto!** 🚀
