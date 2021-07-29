import express from 'express';
import { PORT } from './Server/Config/Constants'

const app = express();
app.use(express.json());

// app.use(express.static('Server/Client'));

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`);
});