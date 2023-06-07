import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// interface CreditCards {
//   name: string;
//   bank: string;
//   card1: string;
//   card2: string;
//   card3: string;
//   card4: string;
//   cvv: string;
//   exp: string;
// }

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.css'],
})
export class CreditcardsComponent implements OnInit {
  i: number = 0;
  selectedCardIndex: number | null = null;

  // creditcards!: creditcards[];
  creditcards: any;
  // creditcardsdata = localStorage.setItem(
  //   'creditcards',
  //   JSON.stringify(this.creditcards)
  // );

  // data: any = localStorage.getItem('creditcards');
  // creditcards: any[] = JSON.parse(this.data);
  bankLogos: any[] = [
    {
      bank: 'AXIS',
      logo: 'https://w7.pngwing.com/pngs/45/80/png-transparent-axis-bank-mortgage-loan-credit-card-bank-purple-text-logo-thumbnail.png',
    },
    {
      bank: 'SBI',
      logo: 'https://w7.pngwing.com/pngs/942/820/png-transparent-state-bank-of-india-sbi-cards-credit-card-debit-card-india-blue-text-logo.png',
    },
    {
      bank: 'BOB',
      logo: 'https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png',
    },
    {
      bank: 'DBS',
      logo: 'https://w7.pngwing.com/pngs/223/607/png-transparent-singapore-dbs-bank-logo-dbs-group-holdings-ltd-bank-text-rectangle-service.png',
    },
  ];

  cardLogos: any[] = [
    {
      cardType: 'RuPay',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png',
    },
    {
      cardType: 'MasterCard',
      logo: 'https://www.vhv.rs/file/max/29/298856_mastercard-logo-png.jpg',
    },
    {
      cardType: 'VISA',
      logo: 'https://www.freepnglogos.com/uploads/visa-card-logo-9.png',
    },
  ];

  cardvalue: boolean = false;
  creditcardsdata: any;
  curretUser: any;

  getBankLogo(bank: string): any {
    // console.log('bank is ', bank);
    let logo;
    this.bankLogos.forEach((banklogo) => {
      // console.log('The bank is ', bank);
      if (banklogo.bank == bank) {
        logo = banklogo.logo;
      }
    });
    return logo;
  }

  getCardTypeLogo(card: string): any {
    // console.log('Type is ', card);
    let logo;
    this.cardLogos.forEach((cards) => {
      if (cards.cardType == card) {
        logo = cards.logo;
      }
    });
    return logo;
  }

  addcardform = new FormGroup({
    name: new FormControl(''),
    cardnum: new FormControl(''),
    cardtype: new FormControl(''),
    cvv: new FormControl(''),
    bankname: new FormControl(''),
    exp: new FormControl(''),
  });
  editcardform = new FormGroup({
    name: new FormControl(''),
    cardnum: new FormControl(''),
    cardtype: new FormControl(''),
    cvv: new FormControl(''),
    bankname: new FormControl(''),
    exp: new FormControl(''),
  });

  get name() {
    return this.addcardform.get('name')!.value;
  }
  get cardnum() {
    return this.addcardform.get('cardnum')!.value;
  }
  get cardtype() {
    return this.addcardform.get('cardtype')!.value;
  }
  get cvv() {
    return this.addcardform.get('cvv')!.value;
  }
  get bankname() {
    return this.addcardform.get('bankname')!.value;
  }
  get exp() {
    return this.addcardform.get('exp')!.value;
  }

  get edname() {
    return this.editcardform.get('name')!.value;
  }
  get edcardnum() {
    return this.editcardform.get('cardnum')!.value;
  }
  get edcardtype() {
    return this.editcardform.get('cardtype')!.value;
  }
  get edcvv() {
    return this.editcardform.get('cvv')!.value;
  }
  get edbankname() {
    return this.editcardform.get('bankname')!.value;
  }
  get edexp() {
    return this.editcardform.get('exp')!.value;
  }

  addcard(): any {
    // console.log(this.addcardform.value);

    let cardnum = String(this.cardnum);

    // console.log(this.cardnum);

    const card = {
      name: this.name,
      bank: this.bankname,
      cardnum: cardnum,
      accno: this.curretUser.accno,

      cvv: this.cvv,
      exp: this.exp,
      cardType: this.cardtype,
    };

    console.log(card);
    this.creditcardsdata.push(card);
    localStorage.setItem('creditcards', JSON.stringify(this.creditcardsdata));
    // console.log(this.creditcards);
    this.cdr.detectChanges();
    this.ngOnInit();
  }

  cardclick(index: number) {
    this.i = index;
    console.log(index);
  }
  editcardvalue: boolean = false;

  editcard(index: number) {
    this.creditcards[index].name = this.edname;
    this.creditcards[index].cardnum = this.edcardnum;
    this.creditcards[index].card1 = String(this.edcardnum)!.slice(0, 4);
    this.creditcards[index].card2 = String(this.edcardnum)!.slice(4, 8);
    this.creditcards[index].card3 = String(this.edcardnum)!.slice(8, 12);
    this.creditcards[index].card4 = String(this.edcardnum)!.slice(12);
    this.creditcards[index].cardType = this.edcardtype;
    this.creditcards[index].cvv = this.edcvv;
    this.creditcards[index].bank = this.edbankname;
    this.creditcards[index].exp = this.edexp;

    console.log(this.creditcards[index]);
    console.log('WORKING');
    this.cdr.detectChanges();
  }

  displayform(index: number) {
    this.selectedCardIndex = index;
    this.populateFormFields();
    this.editcardvalue = !this.editcardvalue;
  }

  populateFormFields() {
    if (this.selectedCardIndex !== null) {
      const selectedCard = this.creditcards[this.selectedCardIndex];

      this.editcardform.patchValue({
        name: selectedCard.name,
        cardnum:
          selectedCard.card1 +
          selectedCard.card2 +
          selectedCard.card3 +
          selectedCard.card4,
        cardtype: selectedCard.cardType,
        cvv: selectedCard.cvv,
        bankname: selectedCard.bank,
        exp: selectedCard.exp,
      });
    }
  }
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let data: any = localStorage.getItem('currentUser');
    this.curretUser = JSON.parse(data);
    console.log(this.curretUser);

    let carddata = localStorage.getItem('creditcards');
    this.creditcardsdata = carddata ? JSON.parse(carddata) : [];
    console.log(this.creditcardsdata);

    let currentUserCreditCards = this.creditcardsdata.filter(
      (creditcard: any) => {
        return creditcard.accno === this.curretUser.accno;
      }
    );

    this.creditcards = currentUserCreditCards.map((card: any) => {
      let card1 = String(card.cardnum)!.slice(0, 4);
      let card2 = String(card.cardnum)!.slice(4, 8);
      let card3 = String(card.cardnum)!.slice(8, 12);
      let card4 = String(card.cardnum)!.slice(12);
      return (card = { ...card, card1, card2, card3, card4 });
    });
    console.log(this.creditcards);
  }
}
