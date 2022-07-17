import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeModuleRoutingModule } from './fake-module-routing.module';
import { FakeModuleComponent } from './fake-module.component';

import { MatSliderModule } from '@angular/material/slider'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FakeModuleComponent
  ],
  imports: [
    CommonModule,
    FakeModuleRoutingModule,

    MatSliderModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class FakeModuleModule { }
