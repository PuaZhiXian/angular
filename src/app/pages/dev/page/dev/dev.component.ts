import {Component} from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent {

  constructor() {
  }

  pageNumber: number = 0;

  ngOnInit() {

  }

  changeChildPage(pageNumber: number) {
    this.pageNumber = pageNumber;
  }
}
