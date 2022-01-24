import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../_services/thesis.service';

@Component({
  selector: 'app-thesis-list',
  templateUrl: './thesis-list.component.html',
  styleUrls: ['./thesis-list.component.css']
})
export class ThesisListComponent implements OnInit {

  constructor(private thesisService: ThesisService) { }

  thesis: any = {}

  ngOnInit(): void {
    this.thesisService.getAllThesis().subscribe(
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
