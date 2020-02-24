import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SiteModuleComponent} from './site/site-module.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'site',
    component: SiteModuleComponent,
    loadChildren: './site/site.module#SiteModule',
    runGuardsAndResolvers: 'always',
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
