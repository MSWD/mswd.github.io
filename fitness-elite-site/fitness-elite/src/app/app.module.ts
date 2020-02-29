import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleHeadingComponent } from '../components/title-heading/title-heading.component';
import { AlertBarComponent } from '../components/alert-bar/alert-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      TitleHeadingComponent,
      AlertBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
