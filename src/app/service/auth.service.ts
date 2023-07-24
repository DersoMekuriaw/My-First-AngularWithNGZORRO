import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentInterface } from '../Department';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'http://localhost:5000/departments';

  constructor(private http: HttpClient) {}

    GetAll(): Observable<DepartmentInterface[]>{
    return this.http.get<DepartmentInterface[]>(this.apiurl);
  }

  GetByID(code: any){
    return this.http.get(this.apiurl + '/' + code);
  }

  AddDepartment(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }

  Updatedepartment(code: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }

  deleteDepartment(code: any){
    return this.http.delete(this.apiurl + '/' + code);    
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username') != null;
  }

  GetUserDepartment(){
    return sessionStorage.getItem('department') != null? sessionStorage.getItem('department')?.toString():'';
  }
}
