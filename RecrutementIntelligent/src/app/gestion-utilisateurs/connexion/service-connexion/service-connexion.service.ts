import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../inscription/interface-inscription/interface-inscription';



@Injectable({
  providedIn: 'root'
})

export class UserAuth {
  private userUrl = 'http://127.0.0.1:8000/fidalli/user/';

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}${id}/`);
  }
}
