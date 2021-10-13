import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesGlobales } from '../variablesGlobales';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public param: VariablesGlobales) { }

  ngOnInit(): void {
  }

}
