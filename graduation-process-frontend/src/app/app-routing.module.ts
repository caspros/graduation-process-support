import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component'
import { RegisterViewComponent } from './register-view/register-view.component'
import { AddThesisComponent } from './add-thesis/add-thesis.component'
import { AddThesisPromoterComponent } from './add-thesis-promoter/add-thesis-promoter.component';
import { ThesisListComponent } from './thesis-list/thesis-list.component'
import { ThesisListPromoterComponent } from './thesis-list-promoter/thesis-list-promoter.component';
import { HomeComponent } from './home/home.component';
import { ReviewersAssignmentComponent } from './reviewers-assignment/reviewers-assignment.component'
import { ThesisConfirmationComponent } from './thesis-confirmation/thesis-confirmation.component'
import { AddReviewComponent } from "./add-review/add-review.component";
import { ReviewListComponent } from "./review-list/review-list.component";
import { AssignReviewerComponent } from './assign-reviewer/assign-reviewer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: 'thesis/add', component: AddThesisComponent },
  { path: 'thesis/add-promoter', component: AddThesisPromoterComponent },
  { path: 'thesis/:id/reviewer', component: AssignReviewerComponent },
  { path: 'thesis', component: ThesisListComponent },
  { path: 'thesis-promoter', component: ThesisListPromoterComponent },
  { path: 'thesis/confirmation', component: ThesisConfirmationComponent },
  { path: 'reviewers-assignment', component: ReviewersAssignmentComponent },
  { path: 'review', component: ReviewListComponent },
  { path: 'review/add/:id', component: AddReviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
