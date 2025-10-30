import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-day.html',
  styleUrl: './event-day.css',
})
export class EventOfTheDayComponent implements OnInit {
  event: any = null;

  constructor(private nasaService: NasaService){}

    async ngOnInit(){
this.event = await this.nasaService.getEventOfTheDay();
    }
  }


