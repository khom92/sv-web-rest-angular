import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentoServiceService } from '../../services/departamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit {

  departamentos: Departamento[];

  constructor(private depService: DepartamentoServiceService,
    private route: ActivatedRoute, 
    private router: Router) {
   }

  ngOnInit() {
    this.depService.findAll().subscribe(data => {
      this.departamentos = data['value'];
    });
  }

  DeleteLsComponent(dep : Departamento){
    console.log('Dep deleted');
    this.depService.deleteSvc(dep)
    .subscribe(data=>{
      this.departamentos = this.departamentos.filter(d=>d!==dep);
    })
  }

  UpdateLsComponent(dep : Departamento): void{
    localStorage.setItem("dep", JSON.stringify(dep));
    this.router.navigate(['edit']);
  }

 }
