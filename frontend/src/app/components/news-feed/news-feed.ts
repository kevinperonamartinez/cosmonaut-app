import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-feed.html',
  styleUrl: './news-feed.css',
})
export class NewsFeedComponent implements OnInit {

  news: any[] = [];

  constructor(private nasaService: NasaService) { }

  async ngOnInit() {
    this.news = await this.nasaService.getNews();
    
  }

}
