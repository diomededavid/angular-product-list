import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
// Have  to import the module
import {ProductListComponent} from './products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
      // Have to include the Module
      ProductListComponent,
      ConvertToSpacesPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
