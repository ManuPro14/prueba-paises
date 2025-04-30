// src/app/core/services/country.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = environment.API_URL

  constructor(private http: HttpClient) {
    console.log(this.apiUrl, 'API_SERVICE_URL');
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getByCode(code: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alpha/${code}`);
  }
}