import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnessEliteCommonModule } from '../modules/FitnessEliteCommon/FitnessEliteCommon.module';
import { IndexModuleModule } from '../modules/index-module/index-module.module';
import { GroupsModuleModule } from '../modules/groups-module/groups-module.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      IndexModuleModule,
      GroupsModuleModule,
      FitnessEliteCommonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
