import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private adminAuthService: AdminAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.adminAuthService.isLoggedIn()) {
      return true;  // Allow navigation if logged in
    } else {
      this.router.navigate(['/admin-login']);  // Redirect to login if not logged in
      return false;
    }
  }
}
