import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const backendURL = environment.apiURL;
const API_URL = backendURL + '/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getStudentFeatures(): Observable<any> {
    return this.http.get(API_URL + 'student', { responseType: 'text' });
  }

  getCommissionFeatures(): Observable<any> {
    return this.http.get(API_URL + 'commission', { responseType: 'text' });
  }

  getUniversityEmployeeFeatures(): Observable<any> {
    return this.http.get(API_URL + 'universityemployee', { responseType: 'text' });
  }

  getDeansRepresenativeFeatures(): Observable<any> {
    return this.http.get(API_URL + 'deansrepresenative', { responseType: 'text' });
  }
}
