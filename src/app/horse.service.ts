import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horse } from './horse.model';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  //https://forum.serpapi.com/feature-requests/p/add-http-cors-headers

  constructor(private httpClient: HttpClient) { }     

  getData() {
    return this.httpClient.get("/api/getData");
  }
}

