import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.serviceRegisteredPorts';
import { DataService1 } from './data.serviceApiInfo';
import { License } from './data.serviceLicense';
import {xml2json} from 'xml2json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private users$: any[];
  private api$: any;
  private version$: any;
  private name$: any;
  private uptime$: any;
  private numberOfRegisteredComponents$: any[];
  private xmlpayloads$: any;
  constructor(private dataService: DataService, private dataService1: DataService1, private dataService2: License) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any) => {
      this.users$ = data.data;
      this.numberOfRegisteredComponents$ = data.data;
    });
    this.dataService1.getAPI().subscribe((data: any) => {
      this.api$ = data.data;
      this.version$ = data.data.version;
      this.name$ = data.data.name;
      this.uptime$ = data.data.uptime;
    });
    this.dataService2.getAdminLicense().subscribe((data: any) => {
      this.xmlpayloads$ = xml2json.toJson(data.data);
      console.log(this.xmlpayloads$);
    });
  }
}
