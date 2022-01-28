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
            //thesis.id_student = this.user.id;
     }
      thesis.creation_date = new Date()
      thesis.type = "magisterska"
      thesis.status = "zgłoszona"

      console.log(thesis)
      console.log(this.user.id)
      return this.httpClient.post(`${this.baseURLCreateThesis}`, thesis, this.user.id);
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

