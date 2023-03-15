import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TesterApiService} from "../../../../service/testerApi/tester-api.service";
import {IClientDetail} from "../../../../interface/client/i-client-detail";
import {ClientConstant} from "../../../../constant/client/client-constant";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent {

  clientDetails!: IClientDetail[];

  constructor(
    private router: Router,
    private testerApiService: TesterApiService) {
  }

  ngOnInit(): void {
  }

  direct() {
    this.router.navigate(['/profile']);
  }

  getUserDetail() {
    this.testerApiService.getUserDetail(ClientConstant.one)
      .subscribe((resp) => {
        this.clientDetails = resp;
      })
  }
}
