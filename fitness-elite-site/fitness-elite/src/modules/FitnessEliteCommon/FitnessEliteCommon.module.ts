import { NgModule } from '@angular/core';
import { AlertBarComponent } from '../../components/alert-bar/alert-bar.component';
import { TitleHeadingComponent } from '../../components/title-heading/title-heading.component';

@NgModule({
  exports: [
    AlertBarComponent,
    TitleHeadingComponent
  ],
  declarations: [
    AlertBarComponent,
    TitleHeadingComponent
  ]
})
export class FitnessEliteCommonModule { }
