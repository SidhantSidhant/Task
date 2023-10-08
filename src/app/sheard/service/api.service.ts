import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icriteria } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jsondata: string = "http://localhost:3000/posts";
  tableData: Subject<Icriteria[]> = new Subject();

  constructor(private _http: HttpClient) { }

  fetchCliningAgencyData(): Observable<Icriteria> {
    return this._http.get<Icriteria>(this.jsondata)
  }

  createCliningAgencyData(data: Icriteria): Observable<Icriteria> {
    return this._http.post<Icriteria>(this.jsondata, data)
  }

}
