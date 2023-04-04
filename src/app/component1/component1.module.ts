import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Component1Component,
  },
];

@NgModule({
  declarations: [Component1Component],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [Component1Component],
})
export class Component1Module {}
