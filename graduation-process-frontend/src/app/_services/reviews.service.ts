import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Reviews } from '../_classes/reviews'
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
export class ReviewsService {
  private baseURL = backendURL + '/api/reviews';
  private baseThesisURL = backendURL + '/api/thesis';
  private baseURLCreateReviews = backendURL + '/api/create-reviews';
  private user: any;

  constructor(private httpClient: HttpClient, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  getThesisList(): Observable<Reviews[]>{
    return this.httpClient.get<Reviews[]>(`${this.baseURL}`);
  }

  getThesisReportedByPromoter(): Observable<Thesis[]>{
   return this.httpClient.get<Thesis[]>(`${this.baseThesisURL}-promoter`);
 }

  createReviews(reviews: Reviews): Observable<Object>{

    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
      //thesis.id_student = this.user.id;
    }
    reviews.creation_date = new Date()
   // reviews.type = "magisterska"
   // reviews.status = "zgłoszona"

    console.log(reviews)
    console.log(this.user.id)
    return this.httpClient.post(`${this.baseURLCreateReviews}`, reviews, this.user.id);
  }

  getReviewsById(id: number): Observable<Reviews>{
    return this.httpClient.get<Reviews>(`${this.baseURL}/${id}`);
  }

  getAllReviews(): Observable<Reviews>{
    return this.httpClient.get<Reviews>(`${this.baseURL}`);
  }

  updateReviews(id: number, thesis: Reviews): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, thesis);
  }

  deleteReviews(id: number): Observable<Object>{
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

