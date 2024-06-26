import { EventRepository } from '../../domain/EventRepository';
import { Event } from '../../domain/Event';
import { EventModel } from '../models/EventModel';

export class MySQLEventRepository implements EventRepository {
  async save(event: Event): Promise<void> {
    await EventModel.create({
      type: event.type,
      data: event.data,
      timestamp: event.timestamp,
    });
  }
}
