import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbufxRoutingModule } from './nbufx-routing.module';
import { NbufxComponent } from './nbufx.component';

import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NbufxComponent
  ],
  imports: [
    CommonModule,
    NbufxRoutingModule,

    MatButtonModule
  ]
})
export class NbufxModule { }
