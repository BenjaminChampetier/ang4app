import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts: Post[];
  isEdit:boolean = false;


  constructor(private dataService: DataService) { }

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

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  removeHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  addHobby(hobby) {
    //push to the beginning of the array
    this.hobbies.unshift(hobby); 
    return false;
  }

  toggleEdit() {
    this.isEdit = this.isEdit;
    console.log('Edit', this.isEdit);
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

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number
}