import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexModuleComponent } from '../modules/index-module/index-module.component';
import { GroupsModuleComponent } from '../modules/groups-module/groups-module.component';


const routes: Routes = [
  { path: '', component: IndexModuleComponent },
  { path: 'groups', component: GroupsModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
