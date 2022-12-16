import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient : HttpClient) { }

  getProject(projectId) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/project/${projectId}`);
  }

  getUsersPresentInArray(userIds) : Observable<any> {
    return this.httpClient.post(`http://localhost:3000/users/usersPresentInArray`, {userIds});
  }
  
}
