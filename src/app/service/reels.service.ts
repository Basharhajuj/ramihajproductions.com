import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReelService {
  private apiUrl = `${environment.apiUrl}/reels`;

  constructor(private http: HttpClient) {}

  // Fetch all reels
  getReels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new reel
  addReel(reelData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, reelData);
  }

  // Update an existing reel by category
  updateReel(category: string, reelData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${category}`, reelData);
  }

  // Delete a reel by category
  deleteReel(category: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${category}`);
  }
}