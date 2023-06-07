import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  creditcards: any[] = [
    {
      name: 'Tony Stark',
      bank: 'AXIS',
      card1: '4701',
      card2: '0063',
      card3: '5942',
      card4: '1001',
      cvv: '577',
      exp: '6/27',
    },
    {
      name: 'Tony Stark',
      bank: 'SBI',
      card1: '8367',
      card2: '0201',
      card3: '3932',
      card4: '0583',
      cvv: '798',
      exp: '9/30',
    },
    {
      name: 'Tony Stark',
      bank: 'DBS',
      card1: '5106',
      card2: '6633',
      card3: '0602',
      card4: '1068',
      cvv: '567',
      exp: '5/30',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
