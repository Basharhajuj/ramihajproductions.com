import { Component } from '@angular/core';
import { AdminAuthService } from '../service/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(
    private adminAuthService: AdminAuthService,
    private router: Router
  ) {}

  logout(): void {
    this.adminAuthService.logout();
    this.router.navigate(['/admin-login']);  // Redirect to the login page
  }
}
