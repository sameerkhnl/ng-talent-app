import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {AppService} from '../_services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: ActivatedRouteSnapshot;

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.route = activatedRoute.snapshot;
    localStorage.setItem("currentUserShortCode", this.route.queryParamMap.get('userShortCode'));
  }

  ngOnInit() {
  }

}
