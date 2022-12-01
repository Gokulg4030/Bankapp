import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',       // this selector copy to the app component.html then only we can view the html template
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   //  (3rd execution)

  aim = "Your perfect banking partner";       // string interpolation {{ aim}} in html file
  account = "Account number ";                 // property binding - [placeholder] "account" in html file

  acno =''
  pswd=''

// login model
  loginForm = this.fb.group({// group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],    // array
   pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  // class - collection of properties and methods
  // properties/variables
  // userdefined methods        (4th execution)

  

constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {  // (1st execution)   // dependency injection
   // it automatically invoke when the object is created.
 }

  ngOnInit(): void {     // (2nd execution)
    // lifecycle hook of an angular  
    // ngonInit is used for  initial process of components
  }

  // creating function ( event binding on login button)

  acnochange(event:any)                     // any is a data type in angular
  {
     this.acno=event.target.value                         //this is used to refer the value of parameter in the class
     console.log(this.acno)  ;
    }
 
  pswdchange(event:any)
  {
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  /*login(a:any,p:any)
  {
   // alert('Login Clicked');
   var acno=a.value;//1000
   var pswd=p.value;//1000
   var userdetails=this.userdetails;
   
   if(acno in userdetails)
   {
    if(pswd==userdetails[acno]['password'])
    {
      alert('Login successful')
    }
    else{
      alert('Invalid password')
    }}
    else{
    alert('Invalid userdetails')
    
   }
      
  }*/


  login()
  {
   // alert('Login Clicked');
   var acno=this.loginForm.value.acno;//1000
   var pswd=this.loginForm.value.pswd;//1000
   
   if(this.loginForm.valid)
   {
   const result = this.ds.login(acno,pswd);
   
    if (result)
    {

      alert('login successful')
      this.router.navigateByUrl('dashboard')        // navigateByUrl from login page to dashboard page
    }
    else{
      alert(' Login Failed')
    }
  }
else{
  alert('Invalid Form')
}
}
}

   /*if(acno in userdetails)
   {
    if(pswd==userdetails[acno]['password'])
    {
      
    }
    else{
      alert('Invalid password')
    }}
    else{
    alert('Invalid userdetails')
    
   }*/
      
  

