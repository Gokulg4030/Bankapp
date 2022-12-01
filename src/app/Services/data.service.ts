import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // current user

  currentuser=""

  // current acno

  currentacno=""
  constructor() { }

  userdetails:any={                                    //  data base
    1000:{acno:1000,username:'Gokul',password:1000,balance:50000,transaction:[]},
    1001:{acno:1001,username:'Rahul',password:1001,balance:25000,transaction:[]},
    1002:{acno:1002,username:'Devan',password:1002,balance:75000,transaction:[]}
  }
    register(acno:any,username:any,password:any){
    let userdetails = this.userdetails 
    if( acno in userdetails)
    {
      return false;
    }
  else{
    userdetails[acno]={
      acno:acno,
      username:username,
      password:password,
      balance:0,
      transaction:[]
      
    }
    console.log(userdetails);
    return true;
    }
  }

  login(acno:any,pswd:any)
  {
    let userdetails = this.userdetails 
     if(acno in userdetails)
     {
      if(pswd == userdetails[acno]['password'])
      {
        this.currentuser=userdetails[acno]['username']
        this.currentacno =acno
        return true;
      }
      else{
      return false;
      }
     }
     else{
      return false;
     }
  }

  deposit(acno:any,pswd:any,amt:any)
  {
    let userdetails=this.userdetails
    var amount=parseInt(amt)
    if(acno in this.userdetails)
    {
      if(pswd == userdetails[acno]['password'])
      {
        userdetails[acno]['balance'] += amount;
        userdetails[acno]['transaction'].push({
          Type:'Credit',
          Amount:amount
        })
        console.log(userdetails);
        return userdetails[acno]['balance']
      }
      else{
        alert('password incorrect')
        return false;
      }
     }
       else{
        alert('invalid userdetails')
        return false;
       }
    }

    withdraw(acno:any,pswd:any,amt:any)
    {
      let userdetails=this.userdetails
    var amount=parseInt(amt)
    if(acno in this.userdetails){
      if(pswd == userdetails[acno]['password']){
        if(userdetails[acno]['balance']>=amount){
        userdetails[acno]['balance'] -= amount;
        userdetails[acno]['transaction'].push({
          Type:'Debit',
          Amount:amount
        })
        console.log(userdetails);
        return userdetails[acno]['balance']
      }
    
    else{
      alert('Insufficient funds')
      return false;
    }}
    
    else{
        alert('password incorrect')
        return false;
      }
     }
       else{
        alert('invalid userdetails')
        return false;
       }
    }

    gettransaction(acno:any)
    {
      return this.userdetails[acno]['transaction']
    }
  } 

 

