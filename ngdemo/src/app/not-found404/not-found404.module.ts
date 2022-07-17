import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { NotFound404RoutingModule } from './not-found404-routing.module';
import { NotFound404Component } from './not-found404.component';


@NgModule({
  declarations: [
    NotFound404Component
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,

    NotFound404RoutingModule
  ]
})
export class NotFound404Module { }
