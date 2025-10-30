import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})

export class NasaService {
  private BASE_URL = 'http://localhost:5174/api/nasa';

  async getNews(){
    const res = await axios.get(`${this.BASE_URL}/news`);
    return res.data;
  }

  async getEventOfTheDay(){
    const res = await axios.get(`${this.BASE_URL}/event-of-the-day`);
    return res.data;
  }

  async getMissions(){
    const res = await axios.get(`${this.BASE_URL}/missions`);
    return res.data;
  }
  
}
