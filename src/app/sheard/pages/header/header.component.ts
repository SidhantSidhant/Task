import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends NavbarComponent implements OnInit {
  isSelectLang: boolean = true;
  
  constructor(public translate: TranslateService, public apiervic: ApiService) {
    super(apiervic)
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');

  }

 override ngOnInit(): void {
  }

  selectLangvage(): void {
    this.isSelectLang = !this.isSelectLang;
   
    if (this.isSelectLang == true) {
      this.translate.use("en");
    } else {
      this.translate.use("ar")
     
    }
  }
}
