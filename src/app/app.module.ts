import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatSelectModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
