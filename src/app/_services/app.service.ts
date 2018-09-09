import {Injectable} from '@angular/core';
import {AppStatusModel} from '../_models/appStatus.model';
import {CustomerModel} from '../_models/customer.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class AppService {
  appStatus: AppStatusModel[] = [];
  customers: CustomerModel[] = [];
  baseUrl = "http://localhost:8080/tenants/";
  appStatusUrl="http://localhost:8080/t/";

  constructor(private http: HttpClient) {

  }

  getCustomer(shortCode: string): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(this.baseUrl + shortCode);
  }

  getAppStatus(shortCode: string): Observable<AppStatusModel>{
    return this.http.get<AppStatusModel>(this.appStatusUrl + shortCode + "/devs/sameerkhnl/appStatus");
  }

  updateCustomerAppStatus() {
    let data = new HttpParams();
    data.append("setupRequired", 'false');
    return this.http.get<AppStatusModel>(this.appStatusUrl + this.customers[0].shortCode + "/devs/sameerkhnl/appStatus?setupRequired=false");
  }
}
