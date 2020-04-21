import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoServiceService } from '../../services/departamento-service.service';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent {

  departamento: Departamento;

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private depService: DepartamentoServiceService) {
    this.departamento = new Departamento();
  }

  gotoDepList() {
    this.router.navigate(['/dep']);
  }

  onSubmit() {
    this.depService.save(this.departamento).subscribe(result => this.gotoDepList());
  }

}
