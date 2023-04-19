import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyServiceService } from './header/inpfield/body-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InpfieldComponent } from './header/inpfield/inpfield.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InpfieldComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BodyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
