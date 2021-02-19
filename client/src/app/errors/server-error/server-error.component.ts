import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
error :any;
  constructor(private router:Router) {
    const navigation=this.router.getCurrentNavigation();// we can get navigation extras only in constructor
    this.error=navigation?.extras?.state?.error;
    
   }

  ngOnInit(): void {
  }

}
