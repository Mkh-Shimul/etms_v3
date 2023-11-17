import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  CreateBus(busRqst: any): Observable<Bus> {
    return this._http.post<any>(`${this.apiUrl}Bus`, busRqst);
  }

  GetAllBuses(): Observable<Bus[]> {
    return this._http.get<Bus[]>(`${this.apiUrl}Bus`);
  }

  GetBusById(id: number): Observable<Bus> {
    return this._http.get<Bus>(`${this.apiUrl}Bus/${id}`);
  }

  UpdateBusById(busdata: any, id: number): Observable<Bus> {
    return this._http.put<Bus>(`${this.apiUrl}Bus/${id}`, busdata)
  }

  DeleteBus(id: number): Observable<Bus> {
    return this._http.delete<Bus>(`${this.apiUrl}Bus/${id}`);
  }
}
