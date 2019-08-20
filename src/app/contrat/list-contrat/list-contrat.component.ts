import { Component, OnInit } from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {Contrat} from '../../models/Contrat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  public listContrat: Contrat[];

  constructor(private contratService: ContratService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contratService.getContratList().subscribe((data: any) => {
        if (data) {
          this.listContrat = data._embedded.contrats;
        }
    }, error => {
      console.log(error);
    });
  }

  deleteContrat(contract: Contrat) {
    const c = confirm('Are you sure to delete this contract ?');
    if (!c) { return; }
    if (contract) {
    this.contratService.deleteContrat(contract.id).subscribe((data: any) => {
        this.reloadData();
        console.log(data);
        this.listContrat.splice(this.listContrat.indexOf(contract), 1);
    }, error => {
      console.log(error);
    });
    }
  }

  updateContrat(contract: Contrat) {
   this.contratService.setter(contract);
   this.router.navigate(['/Contrat-op']);
  }

  addNewContrat() {
    const contrat = new Contrat();
    this.contratService.setter(contrat);
    this.router.navigate(['/Contrat-op']);
  }

  //
  // getUrl() {
  //   return 'url(\'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiHp6WrwNzjAhUSWxoKHSSvDZ0QjRx6BAgBEAU&url=http%3A%2F%2' +
  //     'Fwww.tfsc.ca%2Fwp%2Fhome%2Frink_background-2%2F&psig=AOvVaw1vBJQ6dI2THsViLGQjxt_W&ust=1564571261083865\')';
  // }
}
