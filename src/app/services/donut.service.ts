import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonutModel } from '../models/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonut(): Observable<DonutModel> {
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
}
