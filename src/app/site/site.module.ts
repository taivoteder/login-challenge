import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import {SiteRoutingModule} from './site-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    SiteRoutingModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SiteModule { }
