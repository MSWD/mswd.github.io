import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsModuleComponent } from './groups-module.component';
import { FitnessEliteCommonModule } from '../FitnessEliteCommon/FitnessEliteCommon.module';

@NgModule({
  imports: [
    CommonModule,
    FitnessEliteCommonModule
  ],
  declarations: [
    GroupsModuleComponent
  ]
})
export class GroupsModuleModule extends FitnessEliteCommonModule { }
