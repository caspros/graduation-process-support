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
  private baseURLCreateReviews = backendURL + '/api/create-review';
  private user: any;

  constructor(private httpClient: HttpClient, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  getThesisList(): Observable<Reviews[]>{
    return this.httpClient.get<Reviews[]>(`${this.baseURL}`);
  }

  getRealizedThesisReportedByPromoter(): Observable<Thesis[]>{
   return this.httpClient.get<Thesis[]>(`${this.baseThesisURL}-promoter/realized`);
 }

  getThesisForReviewer(): Observable<Thesis[]>{
    return this.httpClient.get<Thesis[]>(`${this.baseThesisURL}-reviewer`);
  }

  createReviews(reviews: Reviews, thesisId: number): Observable<Object>{
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }

    reviews.creation_date = new Date()
    reviews.id_user =  this.user.id;
    reviews.id_thesis =  thesisId;

    console.log(reviews)
    console.log(this.user.id)
    return this.httpClient.post(`${this.baseURLCreateReviews}`, reviews, this.user.id);
  }

  createThesisHasReviewer(id_thesis: number, id_reviewer: number): Observable<Object>{
      const body = { title: 'Angular PUT Request Example' };
      return this.httpClient.put(`${this.baseThesisURL}/${id_thesis}/reviewers/${id_reviewer}`, body);
    }

   updateThesisHasReviewer(id_old_reviewer: number, id_thesis: number, id_reviewer: number): Observable<Object>{
   const body = { title: 'Angular PUT Request Example' };
      return this.httpClient.put(`${this.baseThesisURL}/${id_thesis}/reviewers/${id_reviewer}/oldReviewer/${id_old_reviewer}`, body);
    }

  getReviewsById(id: number): Observable<Reviews>{
    return this.httpClient.get<Reviews>(`${this.baseURL}/${id}`);
  }

  getReviewsByStudentId(id: number): Observable<Reviews>{
     return this.httpClient.get<Reviews>(`${this.baseURL}-student`);
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

}

