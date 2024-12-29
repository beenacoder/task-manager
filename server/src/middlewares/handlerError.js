const handlerError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      success: false,
      statusCode,
      error: message,
    });
  
    // Opcional: Log del error para debugging
    console.error(`[Error]: ${message}`);
  };
  
  module.exports = handlerError;
  