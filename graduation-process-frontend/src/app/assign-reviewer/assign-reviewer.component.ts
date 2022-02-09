import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { Error401Component } from '../common/error401/error401.component';
import { TokenStorageService } from '../_services/token-storage.service';
import { ReviewsService } from '../_services/reviews.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-assign-reviewer',
  templateUrl: './assign-reviewer.component.html',
  styleUrls: ['./assign-reviewer.component.css']
})
export class AssignReviewerComponent implements OnInit {
  form: any = {};
  content: string;
  authorized = false;
  promoters: any = {};
  private user: any;
  thesis: any = {};
  private thesisId: number;
  private currentURL: string;
  private urlArr: any = {};

  constructor(private userService: UserService, private thesisService: ThesisService, private tokenStorage: TokenStorageService, private reviewsService: ReviewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.currentURL = window.location.href;
   this.urlArr = this.currentURL.split("/")
   this.thesisId = this.urlArr[this.urlArr.length-2];

  this.userService.getDeansRepresenativeFeatures().subscribe(
        data => {

          console.log("Id thes: " + this.thesisId )
          this.authorized = true;
          this.thesisService.getThesisById(this.thesisId).subscribe(
            data => {
              console.log(data);
              this.thesis = data;

            },
            err => {
              console.log(err);
            }
          );
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );

      if (this.tokenStorage.getToken()) {
        this.user = this.tokenStorage.getUser();
        console.log("Id Usera zalogowanego: " + this.user.id)
        this.getAvailablePromoters();
      }
    }

    getAvailablePromoters(): void {
      this.thesisService.getAvailablePromoters().subscribe(
        data => {
          this.promoters = data;
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    }


 onSubmit(): void {
    if(this.thesis.reviewers.length > 0)
    {
    console.log(this.thesis.reviewers[0].id_user)
        // update
        this.reviewsService.updateThesisHasReviewer(this.thesis.reviewers[0].id_user, this.thesisId, this.form.reviewer).subscribe(
              data => {
                console.log(data);
              },
              err => {
                  console.log(err)
              }
            );

    } else {

     this.reviewsService.createThesisHasReviewer(this.thesisId, this.form.reviewer).subscribe(
            data => {
              console.log(data);
            },
            err => {
                console.log(err)
            }
          );
        }
    }



}
