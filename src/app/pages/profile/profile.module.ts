import {NgModule} from '@angular/core';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './page/profile/profile.component';
import {DetailComponent} from './page/detail/detail.component';


@NgModule({
  imports: [ProfileRoutingModule],
  declarations: [
    ProfileComponent,
    DetailComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
