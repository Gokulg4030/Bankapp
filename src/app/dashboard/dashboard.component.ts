import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // deposit and withdraw properties
  acno="";
  pswd="";
  amount="";

  // withdraw properties

  acno1="";
  pswd1="";
  amount1=""
  

  //current user for login name

  user="";                            // for string interpolation

  depositForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
   amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
   amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
  

  
  constructor(private ds:DataService,private fb:FormBuilder) {
    this.user = this.ds.currentuser;
   }

  ngOnInit(): void {
  }

  deposit()
  {
    //alert('clicked')
    var acno1 = this.depositForm.value.acno1;
    var pswd1 = this.depositForm.value.pswd1;
    var amount1= this.depositForm.value.amount1;

    if(this.depositForm.valid)
   {
    const result= this.ds.deposit(acno1,pswd1,amount1)

    if(result)
    {
      alert(`${amount1} is credited..Available balance is ${result}`) 
    }
    else{
      alert('Transaction Error')
    }
  }
  /*else{
    alert('Invalid Form')
  }*/
}
  withdraw()
  {
    //alert('clicked')
    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount= this.withdrawForm.value.amount;
    if(this.depositForm.valid)
    {
    const result= this.ds.withdraw(acno,pswd,amount)
    if(result)
    {
     
      alert(`${amount} is debited..Available balance is ${result}`)

  }
   else{
       alert('Transaction Error')
  }
}
/*else{
  alert('Invalid form')
}*/
}
  
  }





