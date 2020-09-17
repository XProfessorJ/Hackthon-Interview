import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://127.0.0.1:8080';
  private customerInfo;
  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'async': 'false',
      'Access-Control-Allow-Origin': '*'
      // 'token': localStorage.getItem('token')
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }
  getCustomerInfo() {
    return this.customerInfo;
  }
  login(body): Observable<any> {
    return this.httpClient.post(this.url + '/user/auth', body, this.httpOptions).pipe(
      map(res => {
        if (_.get(res, 'desc') === 'authSuccess') {
          this.customerInfo = _.get(res, 'data');
          debugger
          return true;
        }
        return false;
      })
    )
  }

  addNewInterviewee(body): Observable<any> {
    return this.httpClient.put(this.url + '/user/candidate', body, this.httpOptions).pipe(
      map(res => {
        if (_.get(res, 'token')) {
          return true;
        }
        return false;
      })
    );
  }
  tokenAuth(token) {
    return this.httpClient.get(this.url + '/token/' + token).pipe(
      map(res => {
        if (_.get(res, 'desc') === 'authSuccess') {
          return true;
        }
        return false;
      })
    );
  }

  updateInfo(body) {
    return this.httpClient.post(this.url + '/user', body, this.httpOptions).pipe(
      map(res => {
        if (_.get(res, 'desc') === 'updateSuccess') {
          return true;
        }
        return false;
      })
    );
  }
}
