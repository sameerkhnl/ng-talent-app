import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AppService} from '../_services/app.service';
import {CustomerModel} from '../_models/customer.model';
import {AppStatusModel} from '../_models/appStatus.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: ActivatedRouteSnapshot;
  appStatus: AppStatusModel;
  shortCode: string;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private router: Router) {
    this.route = activatedRoute.snapshot;
    this.shortCode = this.route.params['userShortCode'];
    localStorage.setItem("currentUserShortCode", this.shortCode);
  }

  ngOnInit() {
    this.appService.getAppStatus(this.shortCode).subscribe(appStatus => {
      console.log(appStatus);
      this.appStatus = appStatus;
      this.appService.appStatus[0] = appStatus;
      if(this.appStatus.setupRequired){
        this.router.navigate([this.shortCode, 'setup']);
      }
    });
    this.appService.getCustomer(this.shortCode).subscribe(customer => {
      this.appService.customers[0] = customer;
    })
  }

}
