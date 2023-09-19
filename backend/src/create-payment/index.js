exports.handler = async (event) => {
    // Simplemente devuelve un mensaje de saludo
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hola desde mi función Lambda en Node.js!'),
    };
    return response;
  };