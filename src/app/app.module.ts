import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './Components/task1/task1.component';
import { Task2Component } from './Components/task2/task2.component';

@NgModule({
    declarations: [
        AppComponent,
        Task1Component,
        Task2Component,
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
