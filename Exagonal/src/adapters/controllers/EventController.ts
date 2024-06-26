import { Request, Response } from 'express';
import { EventService } from '../../application/EventService';
import { sendEmail } from '../../infrastructure/EmailService';

export class EventController {
  private readonly eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  public createEvent = async (req: Request, res: Response): Promise<void> => {
    const { type, data } = req.body;
    try {
      await this.eventService.createEvent(type, data);
      
      const emailSubject = `Nuevo evento: ${type}`;
      const emailText = `Se ha registrado un nuevo evento del tipo ${type} con los siguientes datos: ${JSON.stringify(data)}`;
      await sendEmail('fd8242568@gmail.com', emailSubject, emailText); 
      res.status(201).json({ message: 'Event created and email sent successfully' });
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };
}
