import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DevComponent} from "./page/dev/dev.component";

const routes: Routes = [
  {path: '', component: DevComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule {
}
