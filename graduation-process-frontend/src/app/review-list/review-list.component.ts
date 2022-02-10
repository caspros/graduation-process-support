import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../_services/reviews.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  constructor(private reviewsService: ReviewsService) { }

  thesis: any = {}
  thesis1: any = {}

  ngOnInit(): void {
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
