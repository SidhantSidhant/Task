import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HeaderComponent } from '../header/header.component';
import { FormComponent } from '../form/form.component';
import { ApiService } from '../../service/api.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends FormComponent implements OnInit {
  date !: string | Date;
  time : any;
  morningMsg !: string;
  $unsubscript : Subject<void> = new Subject<void>();
  constructor(public apiservice: ApiService,) {
    super(apiservice)
   }

 override ngOnInit(): void {
   this.dateSetmomment();
    this.dateTimepicker();
  }

  dateSetmomment(): void {
    const momentdate = moment();
     this.date = new Date();  
  }

  dateTimepicker(): void {
    const dateTimepicker = new Date()
    const dateTime: any = dateTimepicker.getHours();
    const dateMin = dateTimepicker.getMinutes();
    const datesec = dateTimepicker.getSeconds();
    if (dateTime >= 6 && dateTime < 12) {
      this.morningMsg = "Good morning";
    } else if (dateTime >= 12 && dateTime < 17) {
      this.morningMsg = "Good afternoon";
    } else if (dateTime >= 17 && dateTime < 20) {
      this.morningMsg = "Good evening";
    } else {
      this.morningMsg = "Good night";
    }

  }

  tables() : void{

  }
}
