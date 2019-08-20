import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../models/Role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public listRoles: Role[];
  public nom: string;


  constructor(private roleService: RoleService, private router: Router) {
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoleList().subscribe((data: any) => {
      if (data) {
        this.listRoles = data._embedded.roles;
      }
    }, error => {
      console.log(error);
    });
  }

  clickMethod(name: string) {
    if (confirm('Are you sure to delete ' + name)) {
      console.log('Implement delete functionality here');
    }
  }

  deleteRole(r: Role) {
    const role = confirm('Are you sure to delete this role ?');
    if (!role) {
      return;
    }
    this.roleService.deleteRole(r.id).subscribe((data: any) => {
      this.listRoles.splice(this.listRoles.indexOf(r), 1);
    }, error => {
      console.log(error);
    });
  }

  updateRole(r: Role) {
    this.roleService.setter(r);
    this.router.navigate(['/operation']);
  }

  addNewRole() {
    const r = new Role();
    this.roleService.setter(r);
    this.router.navigate(['/operation']);
  }

  Search() {
    if (this.nom.length !== 0) {
      console.log(this.nom.valueOf());
      this.listRoles = this.listRoles.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      });
    } else if (this.nom.length === 0) {
      console.log('vide');
      return this.listRoles;
    }
  }

}
