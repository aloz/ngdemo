import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbufxComponent } from './nbufx.component';

const routes: Routes = [{ path: '', component: NbufxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbufxRoutingModule { }
