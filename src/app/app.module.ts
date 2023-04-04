import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { FormsModule } from '@angular/forms';
import { Component1Module } from './component1/component1.module';

@NgModule({
  declarations: [AppComponent, Component2Component],
  imports: [BrowserModule, FormsModule, Component1Module],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
