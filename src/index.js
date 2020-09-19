const express = require('express');

const app = express();

app.get('/status', (request, response) => {
  return response.send('OK 🚀');
});

app.listen(3333, () => {
  console.log('Back-end started!🚀')
});