import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ReviewsService } from '../_services/reviews.service';
import {ThesisService} from "../_services/thesis.service";
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})

export class AddReviewComponent implements OnInit {

  form: any = {};
  content: string;
  authorized = false;
  isAddingFailed = false;
  isSuccessful = false;
  errorMessage = '';
  status = 'nie zrecenzowana';
  private addedReview: any = {};
  thesis: any = {};
  private user: any;
  private thesisId: number;
  private currentURL: string;
  private urlArr: any = {};
  public alreadyReviewed: boolean = false;


  constructor( private userService: UserService, private reviewsService: ReviewsService, private thesisService: ThesisService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  if (this.tokenStorage.getToken()) {
          this.user = this.tokenStorage.getUser();
          console.log("Id Usera zalogowanego: " + this.user.id)
       }

    this.currentURL = window.location.href;
    this.urlArr = this.currentURL.split("/")
    this.thesisId = this.urlArr[this.urlArr.length-1];
    this.userService.getUniversityEmployeeFeatures().subscribe(
      data => {
        console.log("Id thes: " + this.thesisId )
        this.content = data;
        this.authorized = true;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.thesisService.getThesisById(this.thesisId).subscribe(
      data => {
        console.log(data);
        this.thesis = data;
        if(this.thesis.review.length > 0 && this.thesis.review[0].id_user == this.user.id) {
          this.alreadyReviewed = true;
        }
      },
      err => {
        console.log(err);
      }
    );

  }




  onSubmit(): void {
    this.reviewsService.createReviews(this.form, this.thesisId).subscribe(
      data => {
        this.addedReview = data;
        console.log("Id Thesis dodanej: " + this.addedReview.id);
        this.isSuccessful = true;
        this.isAddingFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isAddingFailed = true;
      }
    );
  }

}
