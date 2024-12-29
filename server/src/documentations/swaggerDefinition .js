const swaggerDefinition  = {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API para gestionar tareas',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
    paths: {
      '/tasks': {
        post: {
          summary: 'Crea una nueva tarea',
          tags: ['Tasks'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['title'],
                  properties: {
                    title: {
                      type: 'string',
                      description: 'El título de la tarea',
                    },
                    description: {
                      type: 'string',
                      description: 'La descripción de la tarea',
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Tarea creada exitosamente',
            },
            400: {
              description: 'Error en la validación',
            },
          },
        },
        get: {
          summary: 'Obtiene todas las tareas',
          tags: ['Tasks'],
          parameters: [
            {
              name: 'completed',
              in: 'query',
              description: 'Filtrar por estado (true o false)',
              required: false,
              schema: {
                type: 'boolean',
              },
            },
          ],
          responses: {
            200: {
              description: 'Lista de tareas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        title: {
                          type: 'string',
                        },
                        description: {
                          type: 'string',
                        },
                        completed: {
                          type: 'boolean',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/tasks/{id}': {
        get: {
          summary: 'Obtiene una tarea por ID',
          tags: ['Tasks'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
              },
              description: 'ID de la tarea',
            },
          ],
          responses: {
            200: {
              description: 'Detalles de la tarea',
            },
            404: {
              description: 'Tarea no encontrada',
            },
          },
        },
        put: {
          summary: 'Actualiza una tarea por ID',
          tags: ['Tasks'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
              },
              description: 'ID de la tarea',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                    },
                    description: {
                      type: 'string',
                    },
                    completed: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Tarea actualizada exitosamente',
            },
            400: {
              description: 'Error en la validación',
            },
            404: {
              description: 'Tarea no encontrada',
            },
          },
        },
        delete: {
          summary: 'Elimina una tarea por ID',
          tags: ['Tasks'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
              },
              description: 'ID de la tarea',
            },
          ],
          responses: {
            200: {
              description: 'Tarea eliminada exitosamente',
            },
            404: {
              description: 'Tarea no encontrada',
            },
          },
        },
      },
    },
  };
  
  module.exports = swaggerDefinition ;
  