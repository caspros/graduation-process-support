import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';


import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { HomeComponent } from './home/home.component';
import { AddThesisComponent } from './add-thesis/add-thesis.component';
import { Error401Component } from './common/error401/error401.component';
import { ThesisListComponent } from './thesis-list/thesis-list.component';
import { ReviewersAssignmentComponent } from './reviewers-assignment/reviewers-assignment.component';
import { ThesisConfirmationComponent } from './thesis-confirmation/thesis-confirmation.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    HomeComponent,
    AddThesisComponent,
    Error401Component,
    ThesisListComponent,
    ReviewersAssignmentComponent,
    ThesisConfirmationComponent,
    ReviewListComponent,
    AddReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
