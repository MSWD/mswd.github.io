import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModuleComponent } from './index-module.component';
import { FitnessEliteCommonModule } from '../FitnessEliteCommon/FitnessEliteCommon.module';

@NgModule({
  imports: [
    CommonModule,
    FitnessEliteCommonModule
  ],
  declarations: [
    IndexModuleComponent
  ]
})
export class IndexModuleModule extends FitnessEliteCommonModule { }
