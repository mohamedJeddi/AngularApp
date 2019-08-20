import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeComponent } from './employe/employe.component';
import { RoleComponent } from './role/role/role.component';
import { CreateContratComponent } from './contrat/create-contrat/create-contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddRoleComponent} from './role/add-role/add-role.component';
import { EmployeFormComponent } from './employe/employe-form/employe-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    WelcomeComponent,
    EmployeComponent,
    RoleComponent,
    CreateContratComponent,
    ListContratComponent,
    AddRoleComponent,
    EmployeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddRoleComponent]
})
export class AppModule { }
