import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsModuleComponent } from './groups-module.component';
import { FitnessEliteCommonModule } from '../FitnessEliteCommon/FitnessEliteCommon.module';
import { TitleHeadingComponent } from '../../components/title-heading/title-heading.component';
import { AlertBarComponent } from '../../components/alert-bar/alert-bar.component';

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
