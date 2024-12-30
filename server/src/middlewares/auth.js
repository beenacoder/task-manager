const jwt = require('jsonwebtoken');

const auth   = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Se espera que el token esté en el encabezado Authorization como "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado, token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    req.user = decoded; // Añadir el objeto decodificado (que contiene los datos del usuario) a la solicitud
    next();
  });
};

module.exports = auth;
