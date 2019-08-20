import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Role} from '../../models/Role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  public role: Role;

  constructor(private roleService: RoleService, public router: Router) { }

  ngOnInit() {
    this.role = this.roleService.getter();
  }



  processForm() {
    if (this.role.id === undefined) {
        this.roleService.createRole(this.role).subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['/role']);
          alert('success');
        }, error => {
          console.log(error);
        });
    } else {
      this.roleService.updateRole(this.role).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/role']);
        alert('success');
      }, error => {
        console.log(error);
      });
    }
  }
}
