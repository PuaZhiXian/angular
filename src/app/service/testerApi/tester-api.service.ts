import {Injectable} from '@angular/core';
import {TesterApiRestService} from "../../restService/testerApi/tester-api.rest.service";
import {Observable} from "rxjs";
import {IClientDetail} from "../../interface/client/i-client-detail";

@Injectable({
  providedIn: 'root'
})
export class TesterApiService {

  constructor(
    private testerApiRestService: TesterApiRestService,) {
  }

  getUserDetail(id?: number): Observable<IClientDetail[]> {
    return this.testerApiRestService.getUserDetail(id);
  }


}
