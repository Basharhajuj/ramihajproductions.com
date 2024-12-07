import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../service/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private adminAuthService: AdminAuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.adminAuthService.login(username, password).subscribe(
        (response) => {
          console.log('Login successful:', response); // Log response for debugging
          localStorage.setItem('adminToken', response.token);
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Login failed:', error); // Log error for debugging
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
  }
}
