import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http : HttpClient) { }

  base_url : string = "https://fake-store-api.mock.beeceptor.com";

  // RxJS tabanlı resource
  rxResourceData = rxResource({
    request : () => this.http.get(`${this.base_url}/api/users`)
  });

}
