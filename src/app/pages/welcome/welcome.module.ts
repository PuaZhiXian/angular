import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from "./page/welcome/welcome.component";
import { TableComponent } from './component/table/table.component';
import {CommonModule} from "@angular/common";
import {NzCardModule} from "ng-zorro-antd/card";
import { ClientCardComponent } from './component/client-card/client-card.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    imports: [WelcomeRoutingModule, CommonModule, NzCardModule, TranslateModule],
  declarations: [WelcomeComponent, TableComponent, ClientCardComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
