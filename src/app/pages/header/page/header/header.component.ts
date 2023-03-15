import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IHeaderList} from "../../../../interface/header/i-header-list";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  headerList!: IHeaderList[];

  constructor(private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.initHeaderList();
  }

  initHeaderList() {
    this.headerList = [
      {
        link: '/dashboard',
        nameKey: 'dashboard',
        selected: true
      },
      {
        link: '/dev',
        nameKey: 'dev.style.guide',
        selected: false
      },
    ]
  }

}
