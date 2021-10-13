import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  user : User = new User("","","","","","","","","","","");

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.user = this.formService.user;
  }

}
