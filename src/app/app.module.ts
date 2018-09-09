import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeatureComponent } from './feature/feature.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './_services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './_guards/auth.guard';
import {AppService} from './_services/app.service';
import { SettingsComponent } from './settings/settings.component';
import {RequestInterceptor} from './_helpers/RequestInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    FeatureComponent,
    PageNotFoundComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, AppService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
