import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {WelcomeModule} from "../welcome/welcome.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        WelcomeModule
    ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
