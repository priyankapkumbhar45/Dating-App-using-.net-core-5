import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors:string[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get404Response() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }

  get500Response() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
  get400Response() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
  get401Response() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
  get400Validation() {
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(resp => {
      console.log(resp);
    }, error => {
      debugger;
      console.log(error);
      this.validationErrors=error;
    });
  }
}
