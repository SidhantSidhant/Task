import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Icriteria } from '../../service/user.interface';
import { ApiService } from '../../service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableArr !: Icriteria[];
  displayedColumns: string[] = ['sr', 'establishmentid', 'crnumber', 'status', 'dateCreationForm', 'agencytype'];
  dataSource = new MatTableDataSource<Icriteria>();

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    // this.dataSource.data = this.tableArr;
    this.apiservice.tableData.subscribe((tableData)=>{
      this.dataSource.data = tableData;
    },(err)=>{
      alert("throw table data Error")
    })
    
    this.apiservice.fetchData().subscribe((response: any) => {
      this.dataSource.data = response;
    }, (err)=>{
      alert(`${err}`)
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.tableArr;
  }

}
