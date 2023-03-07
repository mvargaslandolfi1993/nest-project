import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  create(createEventDto: CreateEventDto) {
    return this.eventsRepository.save(createEventDto)
  }

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOneBy({ id });
  }
  
  update(id: number, updateEventDto: UpdateEventDto) {
    this.eventsRepository.update(id, updateEventDto);
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
