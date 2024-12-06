import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private apiUrl = 'http://localhost:5000/api/login'; // Backend login endpoint

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
