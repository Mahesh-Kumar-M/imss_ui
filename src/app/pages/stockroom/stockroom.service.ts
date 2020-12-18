import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockroomService {
  LOCATION_URL;
  constructor(private _http: HttpClient) {
    this.setRequestOptionsCCToken();
    this.LOCATION_URL = environment.LOCATION_URL;
   }



  private options: any;

  private setRequestOptionsCCToken() {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  createLocation(payload:any) {
    const url = `${this.LOCATION_URL}/create`;
    return this._http.post(url, JSON.stringify(payload), this.options);
  }

  getlocationDetails(payload:any) {
    const url = `${this.LOCATION_URL}/list`;
    return this._http.post(url, JSON.stringify(payload), this.options);
  }

  getProductDetails() {
    const url = `${this.LOCATION_URL}/productDetails`;
    return this._http.get(url, this.options);
  }

  viewLocation(payload:any) {
    const url = `${this.LOCATION_URL}/view`;
    return this._http.post(url, JSON.stringify(payload), this.options);
  }

  deleteLocation(data: any) {
    const url = `${this.LOCATION_URL}/delete`;
    return this._http
      .post(url, JSON.stringify(data), this.options);
  }

  deleteAllLocation(data: any) {
    const url = `${this.LOCATION_URL}/deleteAll`;
    return this._http
      .post(url, JSON.stringify(data), this.options);
  }

  updateLocation(data: any) {
    const url = `${this.LOCATION_URL}/update`;
    return this._http
      .post(url, JSON.stringify(data), this.options);
  }

  updateAllLocation(data: any) {
    const url = `${this.LOCATION_URL}/updateAll`;
    return this._http
      .post(url, JSON.stringify(data), this.options);
  }
}
