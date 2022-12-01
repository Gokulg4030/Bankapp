import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';                // imported automatically
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';      // imported automatically 

 //  decorator is a function to hold the component data.... attach meta data..
 // meta data - class declaration,methods,properties start with @

@NgModule({
  declarations: [

    //To hold components ,directives of a particular modules...
    AppComponent,
     LoginComponent,                   // login component automatically done when create this component
     RegisterComponent, DashboardComponent, TransactionComponent                 //register component automatically done when create this component
  ],

  // import contains third party libraries 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // provider provides srvices
  providers: [],
  bootstrap: [AppComponent]    // to identify root component
})
export class AppModule { }      
