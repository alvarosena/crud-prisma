import "reflect-metadata"
import cors from 'cors';
import express from 'express';
import { routes } from './routes/routes';
import swaggerUi from "swagger-ui-express"
import swaggerFile from './swagger.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: "Hello, World" });
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));