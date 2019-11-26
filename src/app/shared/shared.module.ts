import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@shared/material.module';

@NgModule({
  imports: [
    // angular
    CommonModule,
    RouterModule,

    // shared
    MaterialModule,
  ],
  exports: [
    // angular
    CommonModule,
    RouterModule,

    // shared
    MaterialModule,
  ]
})
export class SharedModule {

}
