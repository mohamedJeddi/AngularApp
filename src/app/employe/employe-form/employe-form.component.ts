import { Component, OnInit } from '@angular/core';
import {Employe} from '../../models/Employe';
import {EmployeService} from '../../services/employe.service';
import {Router} from '@angular/router';
import {Contrat} from '../../models/Contrat';
import {Role} from '../../models/Role';
import {ContratService} from '../../services/contrat.service';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {

  public listContrat: Contrat[];
  public listRole: Role[];
  public selectedContrat: Contrat;
  public selestedRoles: string;
  public  employe: Employe;

  constructor(private employeService: EmployeService, private router: Router, private contratService: ContratService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    this.employe = this.employeService.getter();

    this.contratService.getContratList().subscribe((data: any) => {
      this.listContrat = data._embedded.contrats;
    });
    this.roleService.getRoleList().subscribe((data: any) => {
      this.listRole = data._embedded.roles;
    });
  }

  processForm() {
    if (this.employe.id === undefined) {
      this.employe.contrat = this.selectedContrat;
      // this.employe.roles = this.selestedRoles;
      const employe = {
        id: this.employe.id, nom: this.employe.nom, prenom: this.employe.prenom, email: this.employe.email, isActif: this.employe.isActif,
        contrat: {id: this.selectedContrat},
        roles:  [{id: this.selestedRoles}]
      };
      // const  contrat = JSON.stringify(employe.contrat);
      // console.log('***************' + contrat);
      console.log('*--------------' + JSON.stringify(employe.roles));
      const r = JSON.stringify(employe.roles);
      console.log('*-----------eeee---' + JSON.parse(r));
      const myemploye = JSON.stringify(employe);
      this.employe = JSON.parse(myemploye);
      console.log('please' + this.employe.contrat.id);
      this.employeService.createEmploye(this.employe).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl('/employe');

      }, error => {
        console.log(error);
      });
    } else {
      this.employe.contrat = this.selectedContrat;
      const employe = {
        id: this.employe.id, nom: this.employe.nom, prenom: this.employe.prenom, email: this.employe.email, isActif: this.employe.isActif,
        contrat: {id: this.selectedContrat},
        roles:  [{id: this.selestedRoles}]
      };
      const myemploye = JSON.stringify(employe);
      this.employe = JSON.parse(myemploye);
      this.employeService.updateEmploye(this.employe).subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['/employe']);
      }, error => {
        console.log(error);
      });
    }
  }

}
