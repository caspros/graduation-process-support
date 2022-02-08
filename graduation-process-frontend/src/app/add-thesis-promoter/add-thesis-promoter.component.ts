import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { Error401Component } from '../common/error401/error401.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-add-thesis-promoter',
  templateUrl: './add-thesis-promoter.component.html',
  styleUrls: ['./add-thesis-promoter.component.css']
})
export class AddThesisPromoterComponent implements OnInit {

  form: any = {};
   content: string;
   authorized = false;
   isAddingFailed = false;
   isSuccessful = false;
   errorMessage = '';
   type = 'magisterska';
   status = 'zgłoszona';
   private addedThesis: any = {};
   private user: any;
   promoters: any = {};

  constructor(private userService: UserService, private thesisService: ThesisService, private tokenStorage: TokenStorageService) { }

   ngOnInit(): void {
      this.userService.getUniversityEmployeeFeatures().subscribe(
        data => {
          this.content = data;
          this.authorized = true;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );

      if (this.tokenStorage.getToken()) {
         this.user = this.tokenStorage.getUser();
      }
    }

    onSubmit(): void {
       this.thesisService.createThesis(this.form).subscribe(
         data => {
           this.addedThesis = data;
           this.isSuccessful = true;
           this.isAddingFailed = false;
           this.thesisService.createThesisHasPromoter(this.addedThesis.id, this.user.id).subscribe(data => {},
              err => { console.log(err);} );
         },
         err => {
           this.errorMessage = err.error.message;
           this.isAddingFailed = true;
         }
    );
  }



 }
