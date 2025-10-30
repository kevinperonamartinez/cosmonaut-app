import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missions.html',
  styleUrl: './missions.css',
})
export class Missions implements OnInit {

  mission : any = null;

  constructor(private nasaService : NasaService) {}

async ngOnInit(){
  this.mission = await this.nasaService.getMissions();
}
}
