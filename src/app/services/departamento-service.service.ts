import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../models/departamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoServiceService {

  private depUrl: string;
 
  constructor(private http: HttpClient) {
    this.depUrl = 'http://localhost:8085/daniel/dep';
  }
  
  public findAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.depUrl);
  }
 
  public save(departamento: Departamento) {
    return this.http.post<Departamento>(this.depUrl, departamento);
  }

  public deleteSvc(depa: Departamento){
    return this.http.delete<Departamento>(this.depUrl +"/"+ depa.depId);
  }

  public updateSvc(dep: Departamento){
    return this.http.put<Departamento>(this.depUrl, dep);
  }
  
}
