import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { MeetingSchedulingComponent } from './meeting-scheduling/meeting-scheduling.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    MeetingSchedulingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
