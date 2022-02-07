import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Thesis } from '../_classes/thesis'
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { environment } from '../../environments/environment'

const backendURL = environment.apiURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThesisService {
  private baseURL = backendURL + '/api/thesis';
  private baseURLCreateThesis = backendURL + '/api/create-thesis';
  private user: any;

  constructor(private httpClient: HttpClient, private authService: AuthService, private tokenStorage: TokenStorageService) { }

    getThesisList(): Observable<Thesis[]>{
      return this.httpClient.get<Thesis[]>(`${this.baseURL}`);
    }

    createThesis(thesis: Thesis): Observable<Object>{

      if (this.tokenStorage.getToken()) {
            this.user = this.tokenStorage.getUser();
     }
      thesis.creation_date = new Date()
      thesis.type = "magisterska"
      thesis.status = "zgłoszona"

      return this.httpClient.post(`${this.baseURLCreateThesis}`, thesis);
    }

    createStudentHasThesis(id_thesis: number, id_student: number): Observable<Object>{
        if (this.tokenStorage.getToken()) {
              this.user = this.tokenStorage.getUser();
       }

        const body = { title: 'Angular PUT Request Example' };
        return this.httpClient.put(`${this.baseURL}/${id_thesis}/students/${id_student}`, body);
      }

    getThesisById(id: number): Observable<Thesis>{
      return this.httpClient.get<Thesis>(`${this.baseURL}/${id}`);
    }

    getAllThesis(): Observable<Thesis>{
      return this.httpClient.get<Thesis>(`${this.baseURL}`);
    }

    updateThesis(id: number, thesis: Thesis): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, thesis);
    }

    deleteThesis(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

}

