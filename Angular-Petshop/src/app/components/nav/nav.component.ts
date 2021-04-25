import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  

  title = 'Petshop Atlântico';
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }

}
