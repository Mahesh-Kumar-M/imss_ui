import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public LOCATION_URL = 'https://vsr-stage4.vwr.com/vsr/wservice/v1/location'
  private options: any;
public mockData = {"message":"List of Location Success","LocationList":[{"locationName":"Etagere 1","stagingArea":null,"products":null,"deleted":"N","stockroomId":"8525","productCount":6,"skGuid":8544,"createdDate":"Sep 9, 2016 6:17:09 AM","modifiedDate":null,"receivedDate":null,"stringCreatedDate":null,"stringModifiedDate":null,"createdBy":1,"reportReceivedDate":null,"reportExpiryDate":null,"modifiedBy":null,"sessionId":null,"secureParamMap":null,"secureParams":null},{"locationName":"Magasin","stagingArea":null,"products":null,"deleted":"N","stockroomId":"8525","productCount":0,"skGuid":8545,"createdDate":"Sep 9, 2016 6:17:09 AM","modifiedDate":null,"receivedDate":null,"stringCreatedDate":null,"stringModifiedDate":null,"createdBy":1,"reportReceivedDate":null,"reportExpiryDate":null,"modifiedBy":null,"sessionId":null,"secureParamMap":null,"secureParams":null}]};

  constructor(private _http: HttpClient,) {
    this.setRequestOptionsCCToken();
  }

  private setRequestOptionsCCToken() {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getlocationDetails(payload:any) {
    const url = `${this.LOCATION_URL}/list`
    return this._http.post(url, JSON.stringify(payload), this.options)
  }

  getProductDetails() {
    const url = `${this.LOCATION_URL}/productDetails`
    return this._http.get(url, this.options)
  }

  viewLocation() {
    const url = `${this.LOCATION_URL}/view`
    return this._http.get(url, this.options)
  }

  deleteLocation(data: any) {
    const url = `${this.LOCATION_URL}/delete`
    return this._http
      .post(url, JSON.stringify(data), this.options)
  }

  deleteAllLocation(data: any) {
    const url = `${this.LOCATION_URL}/deleteAll`
    return this._http
      .post(url, JSON.stringify(data), this.options)
  }

  updateLocation(data: any) {
    const url = `${this.LOCATION_URL}/update`
    return this._http
      .post(url, JSON.stringify(data), this.options)
  }

  updateAllLocation(data: any) {
    const url = `${this.LOCATION_URL}/updateAll`
    return this._http
      .post(url, JSON.stringify(data), this.options)
  }

}
