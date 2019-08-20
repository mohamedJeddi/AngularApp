import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {EmployeComponent} from './employe/employe.component';
import {RoleComponent} from './role/role/role.component';
import {ListContratComponent} from './contrat/list-contrat/list-contrat.component';
import {CreateContratComponent} from './contrat/create-contrat/create-contrat.component';
import {AddRoleComponent} from './role/add-role/add-role.component';
import {EmployeFormComponent} from './employe/employe-form/employe-form.component';



const routes: Routes = [
  {path: 'employe', component: EmployeComponent },
  {path: 'Employe-op', component: EmployeFormComponent},
  {path: 'contrat', component: ListContratComponent},
  {path: 'Contrat-op', component: CreateContratComponent},
  {path: 'role', component: RoleComponent},
  {path: 'operation' , component: AddRoleComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
