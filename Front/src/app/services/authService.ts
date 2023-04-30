import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', {
      email: email,
      password: password,
    });
  }
  logout() {
    sessionStorage.removeItem('token');
  }
}
