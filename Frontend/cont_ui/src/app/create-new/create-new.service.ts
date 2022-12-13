import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CreateNewService {

  constructor(private http : HttpClient) { }

  addNewProject = (projectData) : Observable<any> => {
    return this.http.post('http://localhost:3000/project/addNewProject', projectData);
  }
}
