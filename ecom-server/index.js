const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const apiRouter = express.Router();
const productRouter = require('./routes/product');

apiRouter.use('/products', productRouter);

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});