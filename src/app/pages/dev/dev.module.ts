import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleGuideComponent} from './page/style-guide/style-guide.component';
import {DevComponent} from './page/dev/dev.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {DevRoutingModule} from "./dev-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import { UiComponentComponent } from './page/ui-component/ui-component.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StyleGuideComponent,
    DevComponent,
    UiComponentComponent
  ],
    imports: [
        CommonModule,
        NzButtonModule,
        DevRoutingModule,
        TranslateModule,
        FormsModule
    ]
})
export class DevModule {
}
