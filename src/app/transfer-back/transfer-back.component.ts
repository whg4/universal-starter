import { Component, OnInit, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
})
export class TransferBackComponent implements OnInit {
  public result: any;
  public resultHttpClient: any;
  public resultPost: any;

  constructor(
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.httpClient.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
      this.resultHttpClient = result;
    });
  }
}
