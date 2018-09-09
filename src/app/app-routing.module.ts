import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeatureComponent} from './feature/feature.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';

const appRoutes: Routes = [
  {path: ':userShortCode/welcome', component: HomeComponent},
  {path: 'features', component: FeatureComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
