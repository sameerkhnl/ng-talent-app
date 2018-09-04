import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeatureComponent} from './feature/feature.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';
import {SignInComponent} from './sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'features', component: FeatureComponent, canActivate: [AuthGuard]},
  {path: 'aboutus', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: SignInComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
