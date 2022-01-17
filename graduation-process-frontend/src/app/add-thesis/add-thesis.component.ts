import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ThesisService } from '../_services/thesis.service';
import { Error401Component } from '../common/error401/error401.component';

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

 constructor(private userService: UserService, private thesisService: ThesisService) { }

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
   }

   onSubmit(): void {
      this.thesisService.createThesis(this.form).subscribe(
        data => {
          console.log(data);
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

