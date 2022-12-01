import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',   // this selector copy to the app component.html then only we can view the html template
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";

  // register model

  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  // control - ts file model link to html file

  constructor(private router:Router,private ds: DataService ,private fb:FormBuilder) { }       // dependency injection

  ngOnInit(): void {
  }

  register(){
    //alert('register clicked!');
    var username = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var password= this.registerForm.value.pswd;
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.get('uname')?.errors);
      
    const result = this.ds.register(acno,username,password)     // connection with database (ds)
    if(result)
    {
     alert('Register Successfull')
     this.router.navigateByUrl('')
    }
    else{
      alert('Register Failed')
      this.router.navigateByUrl('register')
    }
  }
  else{
    alert('Invalid Form');
  }
  }
}
