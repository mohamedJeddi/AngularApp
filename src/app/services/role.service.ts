import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public role: Role;
  host = 'http://localhost:8081/roles';

  constructor(private http: HttpClient) { }

  getRoleList(): Observable<any> {
    return this.http.get(this.host);
  }

  getRole(id: number): Observable<any> {
    return this.http.get(this.host + '/' + id);
  }

  createRole(role: Role): Observable<any> {
    return this.http.post(this.host, role);
  }

  updateRole(role: Role): Observable<any> {
    return this.http.patch(this.host + '/' + role.id, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(this.host + '/' + id, {responseType: 'json'});
  }

  setter(role: Role) {
    this.role = role;
  }

  getter() {
    return this.role;
  }
}
