import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../_services/thesis.service';

@Component({
  selector: 'app-thesis-list-promoter',
  templateUrl: './thesis-list-promoter.component.html',
  styleUrls: ['./thesis-list-promoter.component.css']
})
export class ThesisListPromoterComponent implements OnInit {

  constructor(private thesisService: ThesisService) { }

  thesis: any = {}

  ngOnInit(): void {
    this.thesisService.getThesisReportedByPromoter().subscribe(
        data => {
          console.log(data);
          this.thesis = data;
        },
        err => {
          console.log(err);
        }
   );
  }

}
