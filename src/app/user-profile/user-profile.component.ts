import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  prenomUser: string = 'Jacques';
  nomUser: string = 'Dupont';
  villeUser: string = 'Paris';

  constructor() {}
  ngOnInit(): void {}
}
