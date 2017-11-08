import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  lorem: Lorem;
  hobbies: string[];


  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ran...');

    let texth1 = document.querySelector('h1');
    texth1.style.fontSize = "20px";

    let pasdidee = document.querySelector('.paragraph');
    window.setInterval(function () {
      pasdidee.classList.toggle('red');
    }, 1000);


    this.name = 'Benjamin';
    this.age = 29;
    this.email = 'bchampetier@amiltone.fr';
    this.address = {
      street: '176 rue Fructidor',
      city: 'Montpellier',
      state: 'Languedoc'
    };
    this.lorem = {
      questceque: `Qu'est-ce que le Lorem Ipsum?
      Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.`
    };
    this.hobbies = ["football", "jeux-video", "pêche", "cinéma", "bowling"];
  }

  removeHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby); //push to the beginning of the arrayS
    return false;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Lorem {
  questceque: string;
}