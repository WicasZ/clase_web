import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincuerpoComponent } from './maincuerpo/maincuerpo.component';
import { FeaturesComponent } from './features/features.component';
import { ToolComponent } from './tool/tool.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincuerpoComponent,
    FeaturesComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
