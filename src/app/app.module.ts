import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AlertCenterModule} from './alert-center/alert-center-module';
import { AlertGeneratorComponent } from './alert-generator/alert-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
