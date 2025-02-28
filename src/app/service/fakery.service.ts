import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FakeryService {

  //cors error had to add https://corsproxy.io/?url=https://example.com infront 
  //idk why dont ask me lmao
  // private fakeryURL = 'https://corsproxy.io/?url=http://jsonfakery.com/photos';  //now using environment file
  private fakeryURL = environment.apiURL;

  constructor() {}

  async getFakeryPhotos(): Promise<any[]> {
    try {
      const response = await axios.get(this.fakeryURL);
      console.log(response) // Ensure the data can be viewed has gotten successfully, the json shit
      return response.data; // Ensure only the data array is returned
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  }
}
