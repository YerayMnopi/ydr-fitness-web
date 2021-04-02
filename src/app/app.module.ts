import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateModule } from 'ydr-ng-common';
import { AuthModule } from 'ydr-ng-common/auth';
import { UserModule } from 'ydr-ng-common/user';
import { NotificationsModule } from 'ydr-ng-common/notifications';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule } from 'ydr-ng-common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule,
    AuthModule,
    UserModule,
    NotificationsModule,
    HighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
