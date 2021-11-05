import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WrComponent } from './wr/wr.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent,WrComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
