import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexModuleComponent } from './index-module.component';
import { FitnessEliteCommonModule } from '../FitnessEliteCommon/FitnessEliteCommon.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FitnessEliteCommonModule
  ],
  declarations: [
    IndexModuleComponent
  ]
})
export class IndexModuleModule extends FitnessEliteCommonModule { }
