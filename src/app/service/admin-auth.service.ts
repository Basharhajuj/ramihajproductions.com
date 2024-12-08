import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private apiUrl = `${environment.apiUrl}/login`; // Backend login endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('adminToken');
  }

  logout(): void {
    localStorage.removeItem('adminToken');
  }
}
