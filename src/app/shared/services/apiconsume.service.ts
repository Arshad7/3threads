import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconsumeService {

  constructor(private http:HttpClient) { }

  public products(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/people");
  }
}
