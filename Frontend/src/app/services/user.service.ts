import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/today-trips/';

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}users`);
  }
  Register(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}register`, user);
  }
  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}login`, user);
  }
}
