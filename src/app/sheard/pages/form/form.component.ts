import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Icriteria } from '../../service/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form !: FormGroup;
  takeUntil: Subject<void> = new Subject();
  tableArr: Icriteria[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      crnumber: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      agencyname: new FormControl("", [Validators.required]),
      establishmentid: new FormControl("", [Validators.required]),
      dateCreationForm: new FormControl("", [Validators.required]),
      dateCreationTo: new FormControl("", [Validators.required]),
      agencytype: new FormControl("", [Validators.required])
    })
  }

  accountCriteriaformSubmit() {
    this.apiService.updateData(this.form.value).subscribe((responsedata) => {
      this.tableArr.push(responsedata)
      this.apiService.tableData.next(this.tableArr)
    })
    this.form.reset();

  }

}
