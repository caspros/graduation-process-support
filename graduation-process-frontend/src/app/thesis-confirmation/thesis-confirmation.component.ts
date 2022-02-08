import { Component, OnInit } from '@angular/core';
import { ThesisService } from '../_services/thesis.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-thesis-confirmation',
  templateUrl: './thesis-confirmation.component.html',
  styleUrls: ['./thesis-confirmation.component.css']
})
export class ThesisConfirmationComponent implements OnInit {

  thesis: any = {}
  masterSelected: boolean;
  checkedList: any;
  authorized = false;

  constructor(private userService: UserService, private thesisService: ThesisService) {
    this.masterSelected = false;
    this.getCheckedItemList();
   }

   checkUncheckAll() {
    for (var i = 0; i < this.thesis.length; i++) {
      this.thesis[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
   }

   isAllSelected() {
    this.masterSelected = this.thesis.every(function(item:any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
   }

   getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.thesis.length; i++) {
      if(this.thesis[i].isSelected)
      this.checkedList.push(this.thesis[i]);
    }
    //this.checkedList = JSON.stringify(this.checkedList);
   }



    ngOnInit(): void {
     this.userService.getCommissionFeatures().subscribe(
       data => {
         this.authorized = true;
         this.thesisService.getAllThesis().subscribe(
               data => {
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
         console.log(err);
       }
     );

    }

    onSubmit(): void {
    this.checkedList.forEach((item: any) => {
      let id = item.id - 1;
      console.log(this.thesis)
      this.thesis[id].status = "zaakceptowana"
      this.thesisService.updateThesis(id + 1, this.thesis[id]).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    });

    }

}
