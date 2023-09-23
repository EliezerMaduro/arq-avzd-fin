const {
  buildResponse,
  connectToDatabase,
  closeDatabaseConnection,
} = require('/opt/nodejs/common.js')

exports.handler = async (event) => {
  const id = event.pathParameters.id
  const client = connectToDatabase();
  try {
    const result = await client.query(`SELECT * FROM sales_invoice where invoice_id = ${id}`);
    console.log(result.rows)
    closeDatabaseConnection(client);
    const body = result.rows[0]
    const response = buildResponse(200,body);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error en la consulta:', error);
    throw error; // Puedes manejar el error como desees
  }
};