import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './views/not-found/not-found.module';
import { FormComponent } from './lib/components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    RouterModule,
    NotFoundModule,
    FormsModule
    
    

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
