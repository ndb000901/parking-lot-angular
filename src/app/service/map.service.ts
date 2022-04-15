import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AjaxResult } from '../components/common/AjaxResult';
import { ParkingSpace } from '../components/common/ParkingSpace';
import { MyLocation } from '../components/common/MyLocation';
import { BaseConfig } from '../components/common/BaseConfig';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  spacesUrl: string = BaseConfig.myBaseUrl + 'api/spaces';
  locationUrl: string = BaseConfig.myBaseUrl + 'api/location';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  carId: string = '';

  constructor(private http: HttpClient) {}

  getSpaces(): Observable<AjaxResult<ParkingSpace[]>> {
    return this.http.get<AjaxResult<ParkingSpace[]>>(
      this.spacesUrl + '/1',
      this.httpOptions
    );
  }

  getLocation(): Observable<AjaxResult<MyLocation>> {
    let carId = localStorage.getItem('carId');
    return this.http.post<AjaxResult<MyLocation>>(
      this.locationUrl,
      carId,
      this.httpOptions
    );
  }
}
