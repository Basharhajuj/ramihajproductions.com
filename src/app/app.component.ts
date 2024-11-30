import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError  } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showFooter= true;

  isLoading: boolean = false;

  constructor(private router: Router,private spinner: NgxSpinnerService) {}

  

  ngOnInit() {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        this.spinner.hide();
      }
      // Toggle footer visibility
      if (event instanceof NavigationEnd) {
        this.showFooter = !['/admin-login', '/admin/reels', '/admin/vfx'].includes(event.urlAfterRedirects);
      }
    });
  }
}
