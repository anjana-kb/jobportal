import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './landing/layout/layout.component';
import { JobsComponent } from './landing/jobs/jobs.component';
import { SavedjobsComponent } from './landing/jobs/savedjobs/savedjobs.component';
import { UserformComponent } from './landing/jobs/userform/userform.component';
import { HttpClientModule } from '@angular/common/http';
import { AppliedjobsComponent } from './landing/jobs/appliedjobs/appliedjobs.component';
import { ProfileComponent } from './landing/jobs/profile/profile.component';
import { NotificationsComponent } from './landing/jobs/notifications/notifications.component';
// import { MatDialogModule } from '@angular/material/dialog';
//import {MatDialogModule}  from '@angular/material/dialog'
// import { MaterialModule } from '@angular/MaterialModule';
//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    JobsComponent,
    SavedjobsComponent,
    UserformComponent,
    AppliedjobsComponent,
    ProfileComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatDialogModule
    //ToastrModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
