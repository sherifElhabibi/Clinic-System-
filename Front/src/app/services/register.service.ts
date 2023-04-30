import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(public http: HttpClient) {}
  base = environment.baseHttp;
  registerNewUser(user: User) {
    return this.http.post<User>(this.base + 'register', user);
  }
}
