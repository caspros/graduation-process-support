import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../_services/reviews.service';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  constructor(private reviewsService: ReviewsService, private userService: UserService, private thesisService: ThesisService, private tokenStorage: TokenStorageService) { }

  thesis: any = {};
  thesis1: any = {};
  private user: any;
  authorized = false;

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
        this.user = this.tokenStorage.getUser();
     }

     this.userService.getUniversityEmployeeFeatures().subscribe(
       data => {

         this.authorized = true;
       },
       err => {

       }
     );


    this.reviewsService.getRealizedThesisReportedByPromoter().subscribe(
      data => {
        console.log(data);
        this.thesis = data;
      },
      err => {
        console.log(err);
      }
    );

    this.reviewsService.getThesisForReviewer().subscribe(
      data => {
        console.log(data);
        this.thesis1 = data;
      },
      err => {
        console.log(err);
      }
    );
  }


}//getThesisForReviewer
//getThesisReportedByPromoter
