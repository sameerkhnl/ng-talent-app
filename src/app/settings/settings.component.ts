import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../_services/app.service';
import {CustomerModel} from '../_models/customer.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  completeSetup() {
    this.appService.updateCustomerAppStatus().subscribe(x => {
      this.router.navigate([this.appService.customers[0].shortCode, 'home']);
    }, error1 => console.log("error updating customer, try again."));
  }

}
