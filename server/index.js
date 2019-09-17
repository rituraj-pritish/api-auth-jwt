const app = require('./app');
const path = require('path');


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening');
});
