import { EventRepository } from '../domain/EventRepository';
import { Event } from '../domain/Event';

export class EventService {
  private readonly eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async createEvent(type: string, data: Record<string, any>): Promise<void> {
    const event: Event = {
      type,
      data,
      timestamp: new Date().toISOString(),
    };

    await this.eventRepository.save(event);
  }
}
