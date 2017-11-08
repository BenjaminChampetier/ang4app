import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  name = 'Benjamin';

  constructor() { }

  ngOnInit() {
  }

}
