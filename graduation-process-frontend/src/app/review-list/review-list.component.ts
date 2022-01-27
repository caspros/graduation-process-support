import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../_services/reviews.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  constructor(private reviewsService: ReviewsService) { }

  reviews: any = {}

  ngOnInit(): void {
    this.reviewsService.getAllReviews().subscribe(
      data => {
        console.log(data);
        this.reviews = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
