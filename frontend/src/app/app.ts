import { Component } from '@angular/core';

import { EventOfTheDayComponent } from './components/event-day/event-day';
import { NewsFeedComponent } from './components/news-feed/news-feed';
import { Missions } from './components/missions/missions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventOfTheDayComponent, NewsFeedComponent, Missions],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
