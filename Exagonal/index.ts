import express from 'express';
import { json } from 'body-parser';
import { EventController } from './src/adapters/controllers/EventController';
import { EventService } from './src/application/EventService';
import { MySQLEventRepository } from './src/adapters/repositories/MySQLEventRepository';
import { sendEmail } from './src/infrastructure/EmailService';
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());


const eventRepository = new MySQLEventRepository();
const eventService = new EventService(eventRepository);
const eventController = new EventController(eventService);

app.post('/events', eventController.createEvent);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
