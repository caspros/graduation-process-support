import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { ThesisListPromoterComponent } from './thesis-list-promoter/thesis-list-promoter.component';
import { AddThesisPromoterComponent } from './add-thesis-promoter/add-thesis-promoter.component';
import { AssignReviewerComponent } from './assign-reviewer/assign-reviewer.component';
import { ReviewListStudentComponent } from './review-list-student/review-list-student.component';
import { ReviewStudentComponent } from './review-student/review-student.component';
import { RouterModule } from '@angular/router';

export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

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
    ThesisListPromoterComponent,
    AddThesisPromoterComponent,
    AssignReviewerComponent,
    ReviewListStudentComponent,
    ReviewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: rootLoaderFactory,
        deps: [HttpClient],
       }
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
