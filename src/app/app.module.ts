import { FormsModule } from '@angular/forms';
import { BolosService } from './bolos/bolos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BolosComponent } from './bolos/bolos.component';


@NgModule({
  declarations: [
    AppComponent,
    BolosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [BolosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
