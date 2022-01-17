import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thesis } from '../_classes/thesis'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  private baseURL = 'http://localhost:8080/api/thesis/';
  private baseURLCreateThesis = 'http://localhost:8080/api/create-thesis';

  constructor(private httpClient: HttpClient) { }

    getThesisList(): Observable<Thesis[]>{
      return this.httpClient.get<Thesis[]>(`${this.baseURL}`);
    }

    createThesis(thesis: Thesis): Observable<Object>{
      thesis.creation_date = new Date()
      console.log(thesis)
      return this.httpClient.post(`${this.baseURLCreateThesis}`, thesis);
    }

    getThesisById(id: number): Observable<Thesis>{
      return this.httpClient.get<Thesis>(`${this.baseURL}/${id}`);
    }

    updateThesis(id: number, thesis: Thesis): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, thesis);
    }

    deleteThesis(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

  /*constructor(private http: HttpClient) { }

  add(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      title_pl: data.title_pl,
      title_eng: data.title_eng,
      short_description: data.short_description,
      promoter: data.promoter,
    }, httpOptions);
  }*/

}

