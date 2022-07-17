import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeModuleComponent } from './fake-module.component';

const routes: Routes = [{ path: '', component: FakeModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakeModuleRoutingModule { }
