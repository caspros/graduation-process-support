import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { TranslateConfigService } from './_services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  roles: string[];
  isLoggedIn = false;
  showStudentFeatures = false;
  showDeansRepresentativeFeatures = false;
  email: string;

  constructor(private tokenStorageService: TokenStorageService, private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showStudentFeatures = this.roles.includes('ROLE_STUDENT');

      this.email = user.email;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  changeLang(type: string) {
      this.translateConfigService.changeLanguage(type);
    }
}
