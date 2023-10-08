import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Icriteria } from '../../service/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  form !: FormGroup;
  $takeUntil: Subject<void> = new Subject();
  tableArr: Icriteria[] = [];
  subscription$ !: Subscription;
  dateCreationFormFild: string = "";
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      crnumber: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      agencyname: new FormControl("", [Validators.required]),
      establishmentid: new FormControl("", [Validators.required]),
      agencytype: new FormControl("", [Validators.required]),
      customCode : new FormControl("",[Validators.required])
    })
  }

  accountCriteriaformSubmit() {
    this.subscription$ = this.apiService.createCliningAgencyData(this.form.value).subscribe((responsedata: any) => {
      this.tableArr.push(responsedata)
      this.apiService.tableData.next(this.tableArr)
    }, (err) => {
      console.log(err);
    })
    this.form.reset();
  }

  updateDOB(date: any, dateCreation: string) : void{
    const stringifyed = JSON.stringify(date.value);
    const dob = stringifyed.substring(1, 11);
    console.log(dob);
    if (dateCreation === 'dateCreation') {
      this.form.addControl('dateCreationForm', new FormControl(dob, Validators.required))
    } {
      this.form.addControl('dateCreationTo', new FormControl(dob, Validators.required))
    }
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}

