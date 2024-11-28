import { Component } from '@angular/core';
import { AdminAuthService } from '../service/admin-auth.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor( private adminAuthService: AdminAuthService){}

  isAdminLoggedIn(): boolean {
    return this.adminAuthService.isLoggedIn();
  }
}
