import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Info } from './info.model';
@Injectable({
  providedIn: 'root'
})
export class DataService1 {
  apiRegisteredPorts = 'http://192.168.56.101:8081/api/components/registeredports';

  apiInfo = 'http://192.168.56.101:8081/api/info';

  httpOptions = {
    headers: new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Basic YW1hZG91OkFtYTI3Ym91',
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpvariable: HttpClient) { }

  getAPI() {
    return this.httpvariable.get<any[]>(this.apiInfo, this.httpOptions);
  }


}
