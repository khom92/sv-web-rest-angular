import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoServiceService } from 'src/app/services/departamento-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-update-form',
  templateUrl: './dep-update-form.component.html',
  styleUrls: ['./dep-update-form.component.css']
})
export class DepUpdateFormComponent implements OnInit {

  constructor(private service: DepartamentoServiceService,
    private router: Router) { 
    }

    departamento : Departamento = new Departamento();

    ngOnInit() {
      var dep = new Departamento();
      dep = JSON.parse(localStorage.getItem("dep"));
      this.departamento = dep;
    }

  onSubmit() {
    this.service.updateSvc(this.departamento).subscribe(result => this.gotoDepList());
  }

  gotoDepList() {
    this.router.navigate(['/dep']);
  }

}
