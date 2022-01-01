import "reflect-metadata"
import cors from 'cors';
import express from 'express';
import { routes } from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: "Hello, World" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));