import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModuleComponent } from './index-module.component';
import { TitleHeadingComponent } from '../../components/title-heading/title-heading.component';
import { AlertBarComponent } from '../../components/alert-bar/alert-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexModuleComponent,
    TitleHeadingComponent,
    AlertBarComponent
  ]
})
export class IndexModuleModule { }
