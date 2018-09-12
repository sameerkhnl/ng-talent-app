import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AppService} from '../_services/app.service';
import {CustomerModel} from '../_models/customer.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private shortCode: string;
  private route: ActivatedRouteSnapshot;

  constructor(private routeActivated: ActivatedRoute, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.route = this.routeActivated.snapshot;
    this.shortCode = this.route.params['userShortCode'];
  }

  completeSetup() {
    this.appService.updateCustomerAppStatus(this.shortCode).subscribe(x => {
      console.log(x);
      this.router.navigate([this.appService.customers[0].shortCode, 'home']);
    }, error1 => console.log("error updating customer, try again."));
  }
}
