import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/thesis/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  constructor(private http: HttpClient) { }

  add(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      title_pl: data.title_pl,
      title_eng: data.title_eng,
      short_description: data.short_description,
      promoter: data.promoter,
    }, httpOptions);
  }

}

