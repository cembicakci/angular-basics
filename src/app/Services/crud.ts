import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class Crud {

  BASE_URL = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<IUser[]>(this.BASE_URL);
  }

  postData(data: IUser) {
    return this.http.post<IUser>(this.BASE_URL, data);
  }

  getDataById(id: number) {
    return this.http.get<IUser>(`${this.BASE_URL}/${id}`);
  }

  putDataById(id: number, data: IUser) {
    return this.http.put<IUser>(`${this.BASE_URL}/${id}`, data);
  }

  deleteDataById(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
