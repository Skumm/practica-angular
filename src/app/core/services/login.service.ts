import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public getUser(user: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/users?email=' + user + '&password=' + password);
  }
}
