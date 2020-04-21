import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
 
  constructor(
    private route: ActivatedRoute, 
    private router: Router) {
    this.title = 'Departamentos de El Salvador';
  }

  ngOnInit() {
    this.router.navigate(['/dep']);
  }

}
