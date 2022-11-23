import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards = {
    name: 'Caner Ugurlu',
    job: 'Developer',
    tel: '555 555 55 55',
    mail: 'info@caner.de',
    address: 'Hanover/Germany',
  };

  constructor() {}

  ngOnInit(): void {}
}
