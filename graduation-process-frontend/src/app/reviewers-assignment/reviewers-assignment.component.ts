import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { Error401Component } from '../common/error401/error401.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-reviewers-assignment',
  templateUrl: './reviewers-assignment.component.html',
  styleUrls: ['./reviewers-assignment.component.css']
})
export class ReviewersAssignmentComponent implements OnInit {

  form: any = {};
  content: string;
  authorized = false;
  promoters: any = {};
  private user: any;
  thesis: any = {}
  thesisNegative: any = {}

  constructor(private userService: UserService, private thesisService: ThesisService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getDeansRepresenativeFeatures().subscribe(
      data => {
        //this.content = data;
        console.log("Id proba Usera zalogowanego: " + this.user.id)
        this.authorized = true;
        this.thesisService.getAllThesisWithStatusRealized().subscribe(
          data => {
            console.log(data);
            this.thesis = data;

            this.thesis.forEach((item: any) => {
              item.isSelected = false;
            });
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


    this.thesisService.getAllThesisWithNegativeGrade().subscribe(
        data => {
          console.log(data);
          this.thesisNegative = data;

          this.thesis.forEach((item: any) => {
            item.isSelected = false;
          });
        },
        err => {
          console.log(err);
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
      console.log("id prom " + "id thes ")
   }

  assignReviewer(id_promoter: number, id_thesis: number): void {
       console.log("id prom " + id_promoter + "id thes " + id_thesis)
    }
}


