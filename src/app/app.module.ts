import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
  ],
  declarations: [AppComponent, GridDemoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
// platformBrowserDynamic().bootstrapModule(AppModule);
