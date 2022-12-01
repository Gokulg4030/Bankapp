import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  // to hold current acno
  acno:any
  

  // to hold array of transaction

  transaction: any;

  constructor(private ds: DataService) { 
    this.acno=this.ds.currentacno
    this.transaction=this.ds.gettransaction(this.acno)
    console.log(this.transaction)
  }
 
  ngOnInit(): void {
  }

}
