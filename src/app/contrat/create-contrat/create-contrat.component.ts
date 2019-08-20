import {Component, Input, OnInit} from '@angular/core';
import {ContratService} from '../../services/contrat.service';
import {Contrat} from '../../models/Contrat';
import {Router} from '@angular/router';



@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  public contrat: Contrat;


  constructor(private contratService: ContratService, private router: Router) { }

  ngOnInit() {
   this.contrat = this.contratService.getter();
  }

  processForm() {
    if (this.contrat.id === undefined) {
      this.contratService.createContrat(this.contrat).subscribe((data: any) => {
              if (data) {
                this.router.navigate(['/contrat']);
              }
            }, error => {
              console.log(error);
            });
    } else {

      this.contratService.updateContrat(this.contrat).subscribe((data: any) => {
             if (data) {
               console.log(data);
               this.router.navigate(['/contrat']);
             }
           }, error => {
             console.log(error);
           });
    }
    }



}
