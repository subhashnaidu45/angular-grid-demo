import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  declarations: [AppComponent, GridDemoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
