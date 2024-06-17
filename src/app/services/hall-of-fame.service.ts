import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HallOfFameModel } from '../models/hall-of-fame';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  constructor(private http:HttpClient) { }
  
  getPerson(): Observable<HallOfFameModel> {
    return this.http.get<HallOfFameModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
