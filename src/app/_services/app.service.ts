import {Injectable} from '@angular/core';
import {AppStatusModel} from '../_models/appStatus.model';
import {CustomerModel} from '../_models/customer.model';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class AppService {
  appStatus: AppStatusModel[] = [];
  customer: CustomerModel[] = [];
  baseUrl = "localhost:8080/tenants/";


  constructor(private http: HttpClient) {

  }

  getCustomer(shortCode: string) {
    return this.http.get<CustomerModel>(this.baseUrl).subscribe(customer => {
      this.customer[0] = customer;
    }, error1 => {
      console.log('error fetching customer data');
    });
  }
}
