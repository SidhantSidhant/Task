import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Icriteria } from '../../service/user.interface';
import { ApiService } from '../../service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnDestroy {
  @Input() tableArr !: Icriteria[];
  displayedColumns: string[] = ['sr', 'establishmentid', 'crnumber', 'customCode' ,'status', 'dateCreationForm', 'agencytype'];
  dataSource = new MatTableDataSource<Icriteria>();
 subscription$1 !: Subscription;
 subscription$2 !: Subscription;
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
   this.subscription$1 = this.apiservice.tableData.subscribe((tableData)=>{
      this.dataSource.data = tableData;
      this.tableArr = tableData;
    },(err)=>{
      alert("throw table data Error")
    })
    
   this.subscription$2 = this.apiservice.fetchCliningAgencyData().subscribe((response: any) => {
      this.dataSource.data = response;
    }, (err)=>{
      alert(`${JSON.stringify(err)}`)
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.tableArr;
  }

  ngOnDestroy(): void {
    this.subscription$1.unsubscribe();
    this.subscription$2.unsubscribe();
  }
}
