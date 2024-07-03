import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'seconda-vita-front';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
