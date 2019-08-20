import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../services/employe.service';
import {Employe} from '../models/Employe';
import {ContratService} from '../services/contrat.service';
import {Contrat} from '../models/Contrat';
import {Role} from '../models/Role';
import { Router} from '@angular/router';
import {stringify} from 'querystring';
import {from, of} from 'rxjs';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  loading: boolean;

  listEmp: Employe[];
  listRole: Role[];


  constructor(private employeService: EmployeService, public router: Router) { }

  ngOnInit() {
    this.getEmp();
  }

  getEmp() {
    this.loading = true;
    this.employeService.getEmploye().subscribe(response => {
      if (response._embedded && response._embedded.employes && response._embedded.employes.length) {
        this.listEmp = response._embedded.employes.map(data => {
          const employer = {id: data.id, nom: data.nom, prenom: data.prenom, email: data.email, isActif: data.isActif,
                              contrat: data.contrat, roles: data.roles};
          console.log('***********' + employer.roles);
          const contract = this.employeService.getEmployeContrat(data.id).subscribe(data2 => {
            employer.contrat = data2;
          });
          const role = this.employeService.getEmployeRole(data.id).subscribe(data3 => {
            this.listRole = data3._embedded.roles.map(r => {
              const rs = {id: r.id, nom: r.nom};
              employer.roles = rs.nom;
              console.log('rs ' + rs.nom);
            });
            console.log('role ' + this.listRole);
          });
          console.log(employer, contract, role);
          return employer;
        });

        this.loading = false;
      }
    });
  }


  delete(e: Employe) {
    const c = confirm('Are you sure to delete this employe ?');
    if (!c) { return; }
    this.employeService.deleteEmploye(e.id).subscribe((data: any) => {
        this.listEmp.splice(this.listEmp.indexOf(e), 1);
        console.log('id ' + e.id);
    }, error => {
      console.log(error);
    });
  }

  update(e: Employe) {
    this.employeService.setter(e);
    this.router.navigate(['/Employe-op']);
  }

  createEmp() {
    const e = new Employe();
    this.employeService.setter(e);
    this.router.navigate(['/Employe-op']);
  }
}
