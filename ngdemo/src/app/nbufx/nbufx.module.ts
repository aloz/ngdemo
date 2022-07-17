import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbufxRoutingModule } from './nbufx-routing.module';
import { NbufxComponent } from './nbufx.component';



@NgModule({
  declarations: [
    NbufxComponent
  ],
  imports: [
    CommonModule,
    NbufxRoutingModule
  ]
})
export class NbufxModule { }
