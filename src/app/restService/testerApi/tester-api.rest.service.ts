import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IClientDetail} from "../../interface/client/i-client-detail";

@Injectable({
  providedIn: 'root'
})
export class TesterApiRestService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private TODOS: string = this.baseUrl + '/users';

  constructor(private httpClient: HttpClient) {
  }

  getUserDetail(id?: number): Observable<IClientDetail[]> {
    if (id) {
      return this.httpClient.get<IClientDetail[]>(this.TODOS + "/" + id);
    } else {
      return this.httpClient.get<IClientDetail[]>(this.TODOS);
    }
  }
}
