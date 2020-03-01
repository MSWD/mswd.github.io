import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsModuleComponent } from './groups-module.component';
import { TitleHeadingComponent } from '../../components/title-heading/title-heading.component';
import { AlertBarComponent } from '../../components/alert-bar/alert-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GroupsModuleComponent,
    TitleHeadingComponent,
    AlertBarComponent
  ]
})
export class GroupsModuleModule { }
