import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showFooter= true;

  isLoading: boolean = false;

  constructor(private router: Router, private loaderService: LoaderService) {
    // Show loader during navigation start
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loaderService.hide();
      }
    });

    // Subscribe to the loader service
    this.loaderService.isLoading$.subscribe(loading => {
      this.isLoading = loading;
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showFooter = !['/admin-login', '/admin/reels', '/admin/vfx'].includes(event.urlAfterRedirects);
      }
    });
  }
}
