import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http : HttpClient) { }

  base_url : string = "https://fake-store-api.mock.beeceptor.com";

}
