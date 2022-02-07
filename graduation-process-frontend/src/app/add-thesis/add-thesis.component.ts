import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { Error401Component } from '../common/error401/error401.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-add-thesis',
  templateUrl: './add-thesis.component.html',
  styleUrls: ['./add-thesis.component.css']
})

export class AddThesisComponent implements OnInit {

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
     this.userService.getStudentFeatures().subscribe(
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
        console.log("Id Usera zalogowanego: " + this.user.id)
        this.getAvailablePromoters();
     }

   }

   onSubmit(): void {
      console.log("promoter id = " + this.form.promoter);
      this.thesisService.createThesis(this.form).subscribe(
        data => {
          this.addedThesis = data;
          console.log("Id Thesis dodanej: " + this.addedThesis.id);
          this.isSuccessful = true;
          this.isAddingFailed = false;
          this.thesisService.createStudentHasThesis(this.addedThesis.id, this.user.id).subscribe(data => {},
             err => { console.log(err);} );
          this.thesisService.createThesisHasPromoter(this.addedThesis.id, this.form.promoter).subscribe(data => {},
             err => { console.log(err);} );
        },
        err => {
          this.errorMessage = err.error.message;
          this.isAddingFailed = true;
        }
   );
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


}

