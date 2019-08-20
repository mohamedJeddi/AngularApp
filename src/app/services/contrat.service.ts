import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrat} from '../models/Contrat';
import {Role} from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  public host = 'http://localhost:8081/contrats';
  public contrat: Contrat;

  constructor(private http: HttpClient) { }

  getContratList(): Observable<any> {
    return this.http.get(this.host);
  }

  getContrat(id: number): Observable<any> {
    return this.http.get(this.host + '/' + id);
  }

  createContrat(contrat: Contrat): Observable<any> {
    return this.http.post(this.host, contrat);
  }

    updateContrat(contrat: Contrat): Observable<any> {
    return this.http.patch(this.host + '/' + contrat.id, contrat);
  }

  deleteContrat(id: number): Observable<any> {
    return this.http.delete(this.host + '/' + id, {responseType: 'json'});
  }

  setter(contrat: Contrat) {
    this.contrat = contrat;
  }

  getter() {
    return this.contrat;
  }
}
