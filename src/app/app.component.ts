import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showFooter= true;

  isLoading: boolean = false;

  constructor(private router: Router) {}

  

  ngOnInit() {
  
  }
}
