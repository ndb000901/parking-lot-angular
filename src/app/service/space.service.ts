import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AjaxResult } from '../components/common/AjaxResult';
import { BaseConfig } from '../components/common/BaseConfig';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  spaceUrl: string = BaseConfig.myBaseUrl + 'api/space';
  dateTimeUrl: string = BaseConfig.myBaseUrl + 'api/order/datetime';



  constructor(
    private http: HttpClient,
  ) { }

  getValidSpaceNum(): Observable<AjaxResult<number>> {
    return this.http.get<AjaxResult<number>>(this.spaceUrl + '/valid/1',this.httpOptions);
  }

  getInvalidSpaceNum(): Observable<AjaxResult<number>> {
    return this.http.get<AjaxResult<number>>(this.spaceUrl + '/invalid/1',this.httpOptions);
  }

  getOrderTime(): Observable<AjaxResult<string>> {
    let carId = localStorage.getItem('carId');
    return this.http.post<AjaxResult<string>>(this.dateTimeUrl,carId,this.httpOptions);
  }
}
