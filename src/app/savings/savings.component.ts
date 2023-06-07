import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormControlName,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
})
export class SavingsComponent implements OnInit {
  user: any;
  currentTransactions: any;
  transactions: any = [
    {
      account: '1492777463605412',
      type: 'credit',
      amount: 500,
      date: '2023-05-04',
      time: '06:00:00',
      balance: 1900,
    },
    {
      account: '1492777463605412',
      type: 'debit',
      amount: 1500,
      date: '2023-05-04',
      time: '06:13:00',
      balance: 1400,
    },
    {
      account: '1492777463605412',
      type: 'credit',
      amount: 2500,
      date: '2023-05-04',
      time: '06:30:00',
      balance: 2900,
    },
    {
      account: '1492777463605412',
      type: 'debit',
      amount: 500,
      date: '2023-05-04',
      time: '06:45:00',
      balance: 400,
    },
    {
      account: '1492777463605412',
      type: 'debit',
      amount: 200,
      date: '2023-04-05',
      time: '05:39:52',
      balance: 900,
    },
    {
      account: '1492777463605412',
      type: 'credit',
      amount: 100,
      date: '2023-04-05',
      time: '05:40:05',
      balance: 1100,
    },
    {
      account: '1492777463605412',
      type: 'credit',
      amount: 1000,
      date: '2023-04-05',
      time: '06:17:18',
      balance: 1000,
    },
  ];

  depositvalue: boolean = false;
  withdrawvalue: boolean = false;
  transfervalue: boolean = false;

  constructor() {}

  ngOnInit() {
    const data: any = localStorage.getItem('currentUser');
    this.user = JSON.parse(data);
    // console.log(this.user);

    const transactdata: any = localStorage.getItem('transactions');
    this.transactions = transactdata ? JSON.parse(transactdata) : [];
    let currentUserTransactions = this.transactions.filter(
      (transaction: any) => {
        return transaction.accno === this.user.accno;
      }
    );
    // console.log(this.transactions);

    let balance = 0;
    let totalbalance = 0;
    this.currentTransactions = currentUserTransactions.map(
      (transaction: any) => {
        if (transaction.type == 'credit') {
          totalbalance += Number(transaction.amount);
          balance = totalbalance;
          return (transaction = { ...transaction, balance });
        } else {
          totalbalance -= transaction.amount;
          balance = totalbalance;
          return (transaction = { ...transaction, balance });
        }
      }
    );
    console.log(
      this.currentTransactions[this.currentTransactions.length - 1].balance
    );
  }

  depositform = new FormGroup({
    amount: new FormControl(''),
  });

  get damount(): any {
    return this.depositform.get('amount')!.value;
  }
  get wamount(): any {
    return this.withdrawform.get('amount')!.value;
  }
  get tamount(): any {
    return this.transferform.get('amount')!.value;
  }

  get taccno(): any {
    return this.transferform.get('accno')!.value;
  }
  get dateTime(): any[] {
    let timeStamp = new Date();
    let date = timeStamp.getDate();
    let month = timeStamp.getMonth();
    let year = timeStamp.getFullYear();
    let hours = timeStamp.getHours();
    let minutes = timeStamp.getMinutes();
    let seconds = timeStamp.getSeconds();

    let myDate = year + '-' + month + '-' + date;
    let myTime = hours + ':' + minutes + ':' + seconds;
    return [myDate, myTime];
  }

  withdrawform = new FormGroup({
    amount: new FormControl(''),
  });

  transferform = new FormGroup({
    amount: new FormControl(''),
    accno: new FormControl(''),
  });

  deposit() {
    let transaction: any = {
      accno: this.user.accno,
      date: this.dateTime[0],
      time: this.dateTime[1],
      amount: this.damount,
      type: 'credit',
    };
    console.log(transaction);
    this.transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
    this.ngOnInit();
  }

  withdraw() {
    let balance = 0;
    let totalbalance = this.transactions.map((transaction: any) => {
      if (transaction.type === 'credit') {
        balance = balance + transaction.amount;
      } else {
        balance = balance - transaction.amount;
      }
    });
    // console.log(balance);
    // console.log(totalbalance);
    if (balance >= this.wamount) {
      console.log('Inside If loop');
      let transaction: any = {
        accno: this.user.accno,
        date: this.dateTime[0],
        time: this.dateTime[1],
        amount: this.wamount,
        type: 'debit',
      };
      // console.log(transaction, 'My transaction');
      this.transactions.push(transaction);
      // console.log(this.transactions);
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
      this.ngOnInit();
    }
  }

  transfer() {
    let balance = 0;
    let totalbalance = this.transactions.map((transaction: any) => {
      if (transaction.type === 'credit') {
        balance = balance + transaction.amount;
        return balance;
      } else {
        balance = balance - transaction.amount;
        return balance;
      }
    });
    console.log(this.taccno);
    if (balance >= this.tamount) {
      let data: any = localStorage.getItem('Users');
      let userData = JSON.parse(data);
      let findUser = userData.find((userwho: any) => {
        if (userwho.accno == this.taccno) {
          // console.log('INSIDE IF');
          // console.log(userwho);
          return userwho;
        }
      });
      console.log(findUser);
      // console.log(userData);

      if (findUser) {
        // console.log(this.user);
        let transaction1: any = {
          accno: this.user.accno,
          date: this.dateTime[0],
          time: this.dateTime[1],
          amount: this.tamount,
          type: 'debit',
        };

        let transaction2: any = {
          accno: findUser.accno,
          date: this.dateTime[0],
          time: this.dateTime[1],
          amount: this.tamount,
          type: 'credit',
        };

        this.transactions.push(transaction2);
        this.transactions.push(transaction1);

        localStorage.setItem('transactions', JSON.stringify(this.transactions));
        this.ngOnInit();
      }
    }
    // let transaction = {
    //   accno: this.user.accno,
    //   date: this.dateTime[0],
    //   time: this.dateTime[1],
    //   amount: this.tamount,
    //   type: 'debit',
    // };
    // let transaction2 = {
    //   accno: this.taccno,
    //   date: this.dateTime[0],
    //   time: this.dateTime[1],
    //   amount: this.tamount,
    //   type: 'credit',
    // };
  }
}
