import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../models/Role';
import {Employe} from '../models/Employe';
import {map} from 'rxjs/operators';
import {Contrat} from '../models/Contrat';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  host = 'http://localhost:8081/employes';
  host2 = 'http://localhost:8081/employe/contrat/role';
  public employe: Employe;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getEmploye(): Observable<any> {
    return this.http.get(this.host);
  }

  getEmployeContrat(id: number): Observable<any> {
    return this.http.get<Contrat>(this.host + '/' + id + '/contrat').pipe(
      map(data => {
        return data.typdeContrat;
      })
    );
  }

  getEmployeRole(id: number): Observable<any> {
    return this.http.get<Role>(this.host + '/' + id + '/roles');
  }

  createEmploye(employe: Employe): Observable<any> {
    return this.http.post(this.host2, employe, { headers: this.headers, responseType: 'text' });
  }

  updateEmploye(employe: Employe): Observable<any> {
    return this.http.patch(this.host2 , employe, { headers: this.headers, responseType: 'text' });
  }

  deleteEmploye(id: number): Observable<any> {
    return this.http.delete(this.host + '/' + id);
  }

  setter(employe: Employe) {
      this.employe = employe;
  }

  getter() {
    return this.employe;
  }
}
