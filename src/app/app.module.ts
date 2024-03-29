import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TestJayaComponent } from './test-jaya/test-jaya.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TestJayaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
