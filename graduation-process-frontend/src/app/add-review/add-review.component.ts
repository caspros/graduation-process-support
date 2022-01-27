import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ReviewsService } from '../_services/reviews.service';
import {ThesisService} from "../_services/thesis.service";

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

  constructor( private userService: UserService, private reviewsService: ReviewsService) { }

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
  }

  onSubmit(): void {
    this.reviewsService.createReviews(this.form).subscribe(
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
