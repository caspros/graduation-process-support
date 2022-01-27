import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component'
import { RegisterViewComponent } from './register-view/register-view.component'
import { AddThesisComponent } from './add-thesis/add-thesis.component'
import { ThesisListComponent } from './thesis-list/thesis-list.component'
import { HomeComponent } from './home/home.component';
import { ReviewersAssignmentComponent } from './reviewers-assignment/reviewers-assignment.component'
import { ThesisConfirmationComponent } from './thesis-confirmation/thesis-confirmation.component'
import { AddReviewComponent} from "./add-review/add-review.component";
import {ReviewListComponent} from "./review-list/review-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: 'thesis/add', component: AddThesisComponent },
  { path: 'thesis', component: ThesisListComponent },
  { path: 'thesis/confirmation', component: ThesisConfirmationComponent },
  { path: 'reviewers-assignment', component: ReviewersAssignmentComponent },
  { path: 'review', component: ReviewListComponent },
  { path: 'review/add', component: AddReviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
