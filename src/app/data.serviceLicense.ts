import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Info } from './info.model';
@Injectable({
  providedIn: 'root'
})
export class License {
  apiAdminLicense = 'http://192.168.56.101:8081/admin/licenses';


  httpOptions = {
    headers: new HttpHeaders({
// tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Basic YW1hZG91OkFtYTI3Ym91',
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpvariable: HttpClient) { }

  getAdminLicense() {
   return this.httpvariable.get<any[]>(this.apiAdminLicense, this.httpOptions);
  }

}
