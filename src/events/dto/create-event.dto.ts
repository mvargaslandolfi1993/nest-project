import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  venue: string;
  
  @IsNotEmpty()
  limit: number;
}
