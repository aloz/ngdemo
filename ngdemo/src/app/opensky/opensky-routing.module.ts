import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenskyComponent } from './opensky.component';

const routes: Routes = [{ path: '', component: OpenskyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenskyRoutingModule { }
